import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-perfil-detalhes',
  templateUrl: './perfil-detalhes.component.html'
})
export class PerfilDetalhesComponent implements OnInit {

  fullName: string = "";
  email: string = "";
  alias: string = "";

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.fullName = this.authService.getUsuarioAtual().fullName;
    this.email = this.authService.getUsuarioAtual().email;
  }

}
