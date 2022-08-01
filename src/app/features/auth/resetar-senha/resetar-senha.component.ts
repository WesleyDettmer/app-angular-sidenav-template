import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html'
})
export class ResetarSenhaComponent implements OnInit {

  private token!: string;
  email!: string;
  form!: FormGroup;
  loading!: boolean;
  hideNovaSenha: boolean;
  hideNovaSenhaConfirm: boolean;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private titleService: Title) {

    this.titleService.setTitle('Senha Reset');
    this.hideNovaSenha = true;
    this.hideNovaSenhaConfirm = true;
  }

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.token = params.get('token') + '';
      this.email = params.get('email') + '';

      if (!this.token || !this.email) {
        this.router.navigate(['/']);
      }
    });

    this.form = new FormGroup({
      novaSenha: new FormControl('', Validators.required),
      novaSenhaConfirm: new FormControl('', Validators.required)
    });
  }

  resetarSenha() {

    const senha = this.form.get('novaSenha')?.value;
    const senhaConfirm = this.form.get('novaSenhaConfirm')?.value;

    if (senha !== senhaConfirm) {
      this.notificationService.abrirSnackBar('Senhas não são iguais');
      return;
    }

    this.loading = true;

    this.authService.resetarSenha(this.email, this.token, senha, senhaConfirm)
      .subscribe(
        () => {
          this.notificationService.abrirSnackBar('Sua senha mudou.');
          this.router.navigate(['/auth/login']);
        },
        (error: any) => {
          this.notificationService.abrirSnackBar(error.error);
          this.loading = false;
        }
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
