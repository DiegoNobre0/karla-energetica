import { Component, HostListener, ElementRef, OnInit, OnDestroy, ApplicationRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { instagramService } from 'src/app/services/instagram.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private appRef: ApplicationRef,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],      
      message: ['', Validators.required]
    });
    this.getPosts();
    this.getPostInstagram();
    this.matIconRegistry.addSvgIcon(
      'whatsapp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/whatsapp.svg')
    );
  }

  atendimento: any;
  imagem: any;
  exibirModal: boolean = false;
  instagramPosts: any[] = [];
  bloggerPosts: any[] = [];
  contactForm: FormGroup;

  postBloger(): void {
    this.router.navigate(['/blogPost'], { relativeTo: this.route });
  }

  ngOnInit() {

  }

  openInstagramPost(id: string) {
    window.open(`${id}`, "_blank");
  }

  whatsapp(): void{    
    const phoneNumber = '71987141078';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  getPosts() {
    const dataString = localStorage.getItem('bloggerPosts');
    this.bloggerPosts = dataString ? JSON.parse(dataString) : null;
  }
  getPostBlogger(id: any) {
    this.router.navigate(['/post', id], { relativeTo: this.route });
  }

  getPostInstagram() {
    const dataString = localStorage.getItem('instagramPosts');
    this.instagramPosts = dataString ? JSON.parse(dataString) : null;
  }


  extractImageUrl(content: string): string {
    // Lógica para extrair o URL da imagem do conteúdo HTML
    let match = content.match(/src="([^"]+)"/);
    return match ? match[1] : '';
  }

  extractTitle(content: string): string {
    // Lógica para extrair o título do conteúdo HTML
    let title = content.replace(/<[^>]+>/g, '').trim();
    title = title.replace(/&nbsp;/g, ''); // Remove todos os &nbsp; do texto
    return title.length > 100 ? title.substring(0, 100) + '...' : title; // Limita o tamanho se necessário
  }

  extractSummary(content: string): string {
    // Remover tags HTML e caracteres não visíveis do início
    let plainText = content.replace(/<[^>]+>/g, '').replace(/^&nbsp;/, '').trim();

    // Limitar o texto extraído a 200 caracteres
    let summary = plainText.substring(0, 195);

    // Retornar o resumo com reticências no final, se necessário
    return summary.length < plainText.length ? summary + '...' : summary;
  }

  formatDate(dateString: string): string {
    // Lógica para formatar a data de publicação
    let date = new Date(dateString);
    let day = ('0' + date.getDate()).slice(-2); // Adiciona zero à esquerda se necessário
    let month = ('0' + (date.getMonth() + 1)).slice(-2); // Adiciona zero à esquerda se necessário
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


onSubmit() {
    if (this.contactForm.valid) {
      const nome = this.contactForm.get('name')?.value;
      const mensagem = this.contactForm.get('message')?.value;
      
      // Número da cliente (com o DDI 55 do Brasil)
      const phoneNumber = '5571987141078'; 
      
      // Formata a mensagem para o WhatsApp com quebra de linha
      const textoFormatado = encodeURIComponent(`Olá, me chamo ${nome}!\n\n${mensagem}`);
      
      // Abre o WhatsApp em uma nova aba
      window.open(`https://wa.me/${phoneNumber}?text=${textoFormatado}`, '_blank');
      
      // Opcional: Limpa o formulário após o envio
      this.contactForm.reset();
    }
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  zoom = 6;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }


}
