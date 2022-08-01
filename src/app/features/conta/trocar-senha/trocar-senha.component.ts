import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';



@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html'
})
export class TrocarSenhaComponent implements OnInit {

  form!: FormGroup;
  hideSenhaAtual: boolean;
  hideNovaSenha: boolean;
  hideConfirmNovaSenha: boolean;
  senhaAtual!: string;
  novaSenha!: string;
  novaSenhaConfirm!: string;
  disableSubmit!: boolean;

  constructor(private authService: AuthenticationService,
    private notificationService: NotificationService) {

    this.hideSenhaAtual = true;
    this.hideNovaSenha = true;
    this.hideConfirmNovaSenha = true;
  }

  ngOnInit() {
    this.form = new FormGroup({
      senhaAtual: new FormControl('', Validators.required),
      novaSenha: new FormControl('', Validators.required),
      novaSenhaConfirm: new FormControl('', Validators.required),
    });

    this.form.get('senhaAtual')?.valueChanges
      .subscribe(val => { this.senhaAtual = val; });

    this.form.get('novaSenha')?.valueChanges
      .subscribe(val => { this.novaSenha = val; });

    this.form.get('novaSenhaConfirm')?.valueChanges
      .subscribe(val => { this.novaSenhaConfirm = val; });

  }

  trocarSenha() {

    if (this.novaSenha !== this.novaSenhaConfirm) {
      this.notificationService.abrirSnackBar('Senhas não são iguais.');
      return;
    }

    const email = this.authService.getUsuarioAtual().email;

    this.authService.trocarSenha(email, this.senhaAtual, this.novaSenha)
      .subscribe(
        data => {
          this.form.reset();
          this.notificationService.abrirSnackBar('Senha trocada com sucesso.');
        },
        error => {
          this.notificationService.abrirSnackBar(error.error);
        }
      );
  }
}
