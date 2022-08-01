import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-resetar-senha-request',
  templateUrl: './pedido-resetar-senha.component.html'
})
export class PedidoResetarSenhaComponent implements OnInit {

  private email!: string;
  form!: FormGroup;
  loading!: boolean;

  constructor(private authService: AuthenticationService,
    private notificationService: NotificationService,
    private titleService: Title,
    private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Senha Reset Request');

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.form.get('email')?.valueChanges
      .subscribe((val: string) => { this.email = val.toLowerCase(); });
  }

  resetarSenha() {
    this.loading = true;
    this.authService.pedidoResetarSenha(this.email)
      .subscribe(
        results => {
          this.router.navigate(['/auth/login']);
          this.notificationService.abrirSnackBar('Senha verification mail has been sent to your email address.');
        },
        error => {
          this.loading = false;
          this.notificationService.abrirSnackBar(error.error);
        }
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
