import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutMeComponent {

}
