import { Component } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css"
})
export class ProfileComponent {
  constructor(readonly auth: AuthService) {}
}