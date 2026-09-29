import { Component, OnInit, computed } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookingService } from "../../core/services/booking.service";
import { Seat } from "../../core/models/models";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-booking",
  imports: [DecimalPipe],
  templateUrl: "./booking.component.html",
  styleUrl: "./booking.component.css"
})
export class BookingComponent implements OnInit {
  seats: Seat[] = [];
  readonly total = computed(() => this.bookingService.selectedSeats().reduce((sum, seat) => sum + (seat.vip ? 12000 : 9000), 0));

  constructor(
    readonly bookingService: BookingService,
    private readonly route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const functionId = Number(this.route.snapshot.paramMap.get("functionId"));
    this.seats = await this.bookingService.loadSeats(functionId);
  }

  select(seat: Seat): void {
    this.bookingService.toggleSeat(seat);
  }

  isSelected(seat: Seat): boolean {
    return this.bookingService.selectedSeats().some(item => item.id === seat.id);
  }

  async confirm(): Promise<void> {
    alert("Compra demo. Falta conectar el flujo de checkout con Supabase.");
  }
}