import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideServiceWorker } from "@angular/service-worker";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideServiceWorker("ngsw-worker.js", {
      enabled: true,
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
}).catch(error => console.error(error));