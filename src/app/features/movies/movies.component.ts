import { Component, OnInit, computed, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MovieService } from "../../core/services/movie.service";

@Component({
  selector: "app-movies",
  imports: [RouterLink],
  templateUrl: "./movies.component.html",
  styleUrl: "./movies.component.css"
})
export class MoviesComponent implements OnInit {
  readonly search = signal("");
  readonly genre = signal("todos");

  readonly genres = computed(() => {
    const values = this.movieService.movies().flatMap(movie => movie.genres);
    return ["todos", ...new Set(values)];
  });

  readonly movies = computed(() => {
    const search = this.search().toLowerCase();
    const genre = this.genre();
    return this.movieService.movies().filter(movie => {
      const matchesSearch = movie.name.toLowerCase().includes(search);
      const matchesGenre = genre === "todos" || movie.genres.includes(genre);
      return matchesSearch && matchesGenre;
    });
  });

  constructor(readonly movieService: MovieService) {}

  async ngOnInit(): Promise<void> {
    await this.movieService.loadMovies();
  }
}