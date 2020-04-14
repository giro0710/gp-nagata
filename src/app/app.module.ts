import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProductAndServicesComponent } from "./product-and-services/product-and-services.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HappeningsComponent } from "./happenings/happenings.component";
import { HappeningComponent } from "./happening/happening.component";
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home",
    },
  },
  {
    path: "about",
    component: AboutUsComponent,
    data: {
      title: "About",
    },
  },
  {
    path: "projects",
    component: ProductAndServicesComponent,
    data: {
      title: "Projects",
    },
  },
  {
    path: "projects/Public Market",
    component: ProjectComponent,
    data: {
      title: "Public Market",
    },
  },
  {
    path: "happenings",
    component: HappeningsComponent,
    data: {
      title: "Happenings",
    },
  },
  {
    path: "happenings/The Start of the GP-Nagata Collaboration",
    component: HappeningComponent,
    data: {
      title: "The Start of the GP-Nagata Collaboration",
    },
  },
  {
    path: "connect",
    component: ContactUsComponent,
    data: {
      title: "Connect",
    },
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductAndServicesComponent,
    ContactUsComponent,
    HappeningsComponent,
    HappeningComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
