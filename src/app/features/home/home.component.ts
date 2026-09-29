import { Component, OnInit, computed, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MovieService } from "../../core/services/movie.service";

@Component({
  selector: "app-home",
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent implements OnInit {
  readonly search = signal("");

  readonly filteredMovies = computed(() => {
    const value = this.search().trim().toLowerCase();
    return this.movieService.movies().filter(movie =>
      !value || movie.name.toLowerCase().includes(value)
    );
  });

  constructor(readonly movieService: MovieService) {}

  async ngOnInit(): Promise<void> {
    await this.movieService.loadMovies();
  }
}