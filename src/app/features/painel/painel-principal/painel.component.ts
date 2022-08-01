import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
  usuarioAtual: any;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title) {
  }

  ngOnInit() {
    this.usuarioAtual = this.authService.getUsuarioAtual();
    this.titleService.setTitle('Painel Principal');

    setTimeout(() => {
      this.notificationService.abrirSnackBar('Bem vindo!');
    });
  }
}
