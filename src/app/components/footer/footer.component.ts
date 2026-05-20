import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  contactForm: FormGroup;


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

}
