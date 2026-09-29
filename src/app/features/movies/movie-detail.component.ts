import { Component, OnInit, computed } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MovieService } from "../../core/services/movie.service";

@Component({
  selector: "app-movie-detail",
  imports: [RouterLink],
  templateUrl: "./movie-detail.component.html",
  styleUrl: "./movie-detail.component.css"
})
export class MovieDetailComponent implements OnInit {
  readonly movie = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    return this.movieService.movies().find(item => item.id === id);
  });

  constructor(
    private readonly route: ActivatedRoute,
    readonly movieService: MovieService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.movieService.loadMovies();
  }
}