import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IntroComponent } from './intro/intro.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyUsComponent } from './why-us/why-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, AboutMeComponent, TestimonialsComponent, WhyUsComponent, ServicesOfferedComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  selectedTab: string = '';
  routeMap: any = {
    'Home': 'home',
    'About Us': 'about-us',
    'Our Services': 'our-services',
    'Contacts': 'contacts',
  };

  ngOnInit() {
    this.selectedTab = 'Home';
    this.router.navigate([this.routeMap[this.selectedTab]]);
    this.onTabClick(this.selectedTab);
  }

  constructor(private router: Router) { }

  onTabClick(tab: string) {
    this.selectedTab = tab;
    const targetElement = this.routeMap[this.selectedTab]
    if ([targetElement]) {
      document.querySelector(targetElement)?.scrollIntoView({ behavior: 'smooth' });
      console.log("Scrolled Inside if condition");
    }
    console.log("selectedTab", this.selectedTab);
    this.router.navigate([targetElement]);
  }
}