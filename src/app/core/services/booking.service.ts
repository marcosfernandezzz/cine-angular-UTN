import { Injectable, signal } from "@angular/core";
import { Seat } from "../models/models";
import { SupabaseService } from "./supabase.service";

@Injectable({ providedIn: "root" })
export class BookingService {
  readonly selectedSeats = signal<Seat[]>([]);

  constructor(private readonly supabase: SupabaseService) {}

  toggleSeat(seat: Seat): void {
    if (seat.status === "sold") {
      return;
    }

    const selected = this.selectedSeats();
    const exists = selected.some(item => item.id === seat.id);

    this.selectedSeats.set(
      exists
        ? selected.filter(item => item.id !== seat.id)
        : [...selected, seat]
    );
  }

  clear(): void {
    this.selectedSeats.set([]);
  }

  async loadSeats(functionId: number): Promise<Seat[]> {
    const { data, error } = await this.supabase.client
      .from("function_seats")
      .select("id, row, number, accessible, vip, status")
      .eq("function_id", functionId)
      .order("row")
      .order("number");

    if (error) {
      console.error(error);
      return [];
    }

    return (data ?? []) as Seat[];
  }
}