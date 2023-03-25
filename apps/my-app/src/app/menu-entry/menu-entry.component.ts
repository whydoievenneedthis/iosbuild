import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu-service';

@Component({
  selector: 'frontend-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.css'],
})
export class MenuEntryComponent implements OnInit {
  @Input() entry: Menu | null = null;
  @Input() level = 0;

  constructor(private route: Router) {}

  ngOnInit(): void {}
}
