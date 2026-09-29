import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";

@Component({
  selector: "app-login",
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css"
})
export class LoginComponent {
  email = "";
  password = "";
  readonly registerMode = signal(false);
  readonly error = signal("");

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  async submit(): Promise<void> {
    this.error.set("");

    const error = this.registerMode()
      ? await this.auth.register(this.email, this.password)
      : await this.auth.login(this.email, this.password);

    if (error) {
      this.error.set(error);
      return;
    }

    await this.router.navigateByUrl("/");
  }
}