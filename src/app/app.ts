import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';

export interface AppRoute {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'quri-web-app-bien-hecho';
  currentPage = '';
  currentPath = '';
  routes: AppRoute[] = [
    {
      path: 'home',
      label: 'Home',
      icon: 'home',
    },
    {
      path: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard',
    },
    {
      path: 'templates',
      label: 'Templates',
      icon: 'app_registration',
    },
    {
      path: 'favorites',
      label: 'Favorites',
      icon: 'favorite',
    },
    {
      path: 'explore',
      label: 'Explore',
      icon: 'explore',
    },
    {
      path: 'design-lab',
      label: 'Design Lab',
      icon: 'brush',
    },
    {
      path: 'settings',
      label: 'Settings',
      icon: 'settings',
    },
  ];
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentPath = this.router.url.substring(1);
        this.currentPath = this.router.url;
        const currentPage = this.routes.find((p) =>
          currentPath.startsWith(p.path)
        );
        this.currentPage = currentPage ? currentPage.label : '';
      });
  }
}
