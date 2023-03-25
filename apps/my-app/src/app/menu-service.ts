import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  private loggedOutPages: Menu[] = [
    { title: 'menu.logged-out.welcome', url: '/static/welcome' },
    { title: 'menu.logged-out.login', url: '/login' },
    { title: 'menu.logged-out.about-us', url: '/static/about-us' },
  ];

  getLoggedOutMenu(): Menu[] {
    return this.loggedOutPages;
  }

  getMenu(token: undefined): Menu[] {
    return this.loggedOutPages;
  }
}

export interface Menu {
  title: string;
  url?: string;
  action?: string;
  submenus?: Menu[];
}
