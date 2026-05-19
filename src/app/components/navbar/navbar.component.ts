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

  menuItems: any[] = [];

  private lastScrollPosition: number = 0;

  constructor(private router: Router) { }

 ngOnInit() {
    this.buildMenu();
    this.checkScroll();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHidden = false;
        this.sidebarVisible = false;
        this.checkScroll();
      });
}


buildMenu() {
    this.menuItems = [
      { label: 'HOME', command: () => this.navigate('/') },
      { label: 'SOBRE', command: () => this.navigate('/sobre') },
      {
        label: 'SERVIÇOS',
        items: [
          { label: 'Tarot Terapêutico', command: () => this.navigate('/servicos/tarot') },
          { label: 'Sessões de Reiki', command: () => this.navigate('/servicos/reiki') },
          { label: 'Mesa Radiônica', command: () => this.navigate('/servicos/mesa-radionica') },
          { label: 'Cromoterapia', command: () => this.navigate('/servicos/cromoterapia') },
          { label: 'Cristaloterapia', command: () => this.navigate('/servicos/cristaloterapia') },
          { label: 'Limpeza Energética', command: () => this.navigate('/servicos/limpeza-energetica') },
          { label: 'Alinhamento Vibracional', command: () => this.navigate('/servicos/alinhamento-vibracional') }
        ]
      },
      { label: 'CONTATO', command: () => this.navigate('/contato') }
    ];
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
        
      } else {
        this.isHidden = false;
        
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