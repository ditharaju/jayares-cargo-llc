import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  selectedTab: string = 'About Us';
  routeMap: any = {
    'About Us': 'about-us',
    'Our Services': 'our-services',
    'Contacts': 'contacts',
  };

  ngOnInit() {
    this.selectedTab = 'About Us';
    this.router.navigate([this.routeMap[this.selectedTab]]); // Navigate based on tab
  }

  constructor(private router: Router) { }

  onTabClick(tab: string) {
    this.selectedTab = tab;

    this.router.navigate([this.routeMap[tab]]);
  }
}