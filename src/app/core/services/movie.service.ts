import { Injectable, signal } from "@angular/core";
import { Movie } from "../models/models";
import { SupabaseService } from "./supabase.service";

@Injectable({ providedIn: "root" })
export class MovieService {
  readonly movies = signal<Movie[]>([]);

  constructor(private readonly supabase: SupabaseService) {}

  async loadMovies(): Promise<void> {
    const { data, error } = await this.supabase.client
      .from("movies")
      .select("*")
      .order("release_date", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    this.movies.set((data ?? []).map(movie => ({
      id: movie.id,
      name: movie.name,
      imageUrl: movie.image_url,
      synopsis: movie.synopsis,
      durationMinutes: movie.duration_minutes,
      genres: movie.genres ?? [],
      ageRating: movie.age_rating,
      formats: movie.formats ?? [],
      languageModes: movie.language_modes ?? [],
      releaseDate: movie.release_date
    })));
  }
}