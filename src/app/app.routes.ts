import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "peliculas",
    loadComponent: () => import("./features/movies/movies.component").then(m => m.MoviesComponent)
  },
  {
    path: "peliculas/:id",
    loadComponent: () => import("./features/movies/movie-detail.component").then(m => m.MovieDetailComponent)
  },
  {
    path: "comprar/:functionId",
    canActivate: [authGuard],
    loadComponent: () => import("./features/booking/booking.component").then(m => m.BookingComponent)
  },
  {
    path: "perfil",
    canActivate: [authGuard],
    loadComponent: () => import("./features/profile/profile.component").then(m => m.ProfileComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./features/auth/login.component").then(m => m.LoginComponent)
  },
  {
    path: "admin",
    canActivate: [authGuard],
    loadComponent: () => import("./features/admin/admin.component").then(m => m.AdminComponent)
  },
  { path: "**", redirectTo: "" }
];