import { Injectable, signal } from "@angular/core";
import { User } from "@supabase/supabase-js";
import { SupabaseService } from "./supabase.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  readonly user = signal<User | null>(null);
  readonly loading = signal(true);

  constructor(private readonly supabase: SupabaseService) {
    this.loadUser();
    this.supabase.client.auth.onAuthStateChange((_event, session) => {
      this.user.set(session?.user ?? null);
      this.loading.set(false);
    });
  }

  private async loadUser(): Promise<void> {
    const { data } = await this.supabase.client.auth.getUser();
    this.user.set(data.user);
    this.loading.set(false);
  }

  async login(email: string, password: string): Promise<string | null> {
    const { error } = await this.supabase.client.auth.signInWithPassword({ email, password });
    return error?.message ?? null;
  }

  async register(email: string, password: string): Promise<string | null> {
    const { error } = await this.supabase.client.auth.signUp({ email, password });
    return error?.message ?? null;
  }

  async logout(): Promise<void> {
    await this.supabase.client.auth.signOut();
  }
}