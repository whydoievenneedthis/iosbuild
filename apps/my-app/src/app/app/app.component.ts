import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../menu-service';

@Component({
  selector: 'frontend-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  pages: Menu[] = this.menuService.getLoggedOutMenu();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}
}
