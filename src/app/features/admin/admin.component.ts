import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-admin",
  imports: [RouterLink],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css"
})
export class AdminComponent {
  readonly modules = [
    ["Peliculas", "Catalogo, generos, imagenes y clasificacion"],
    ["Salas", "Distribucion de butacas y tipos"],
    ["Funciones", "Programacion y disponibilidad"],
    ["Productos", "Candy Bar y categorias"],
    ["Precios", "Precios comunes y VIP"],
    ["Cupones", "Descuentos y vigencia"],
    ["Combos", "Productos agrupados"],
    ["Recompensas", "Fidelizacion"],
    ["Reportes", "Ventas y metricas"],
    ["Auditoria", "Trazabilidad de operaciones"]
  ];
}