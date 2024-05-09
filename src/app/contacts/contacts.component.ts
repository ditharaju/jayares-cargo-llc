import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  email = 'info@jayarescargo.com';
}

