import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isScrolled: boolean = false;
  isHidden: boolean = false;
  sidebarVisible: boolean = false;

  private lastScrollPosition: number = 0;

  constructor(private router: Router) { }

 ngOnInit() {
    this.checkScroll();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHidden = false;
        this.sidebarVisible = false;
        this.checkScroll();
      });
}

@HostListener('window:scroll', [])
onWindowScroll() {
    this.checkScroll();
}

private checkScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;

    this.isScrolled = currentScroll > 20;

    if (currentScroll > 100) { 
      if (currentScroll > this.lastScrollPosition) {
        this.isHidden = true;
        console.log('ESCONDENDO - isHidden:', this.isHidden); // ← log
      } else {
        this.isHidden = false;
        console.log('MOSTRANDO - isHidden:', this.isHidden); // ← log
      }
    } else {
      this.isHidden = false;
    }

    this.lastScrollPosition = currentScroll;
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.sidebarVisible = false;
    window.scrollTo(0, 0); // Força a página a ir para o topo ao navegar
  }
}