import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    loading!: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.titleService.setTitle('Login');
        this.authenticationService.logout();
        this.createForm();
    }

    private createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            senha: new FormControl('', Validators.required),
        });
    }

    login() {
        const email = this.loginForm.get('email')?.value;
        const senha = this.loginForm.get('senha')?.value;
        const rememberMe = this.loginForm.get('rememberMe')?.value;

        this.loading = true;
        this.authenticationService
            .login(email.toLowerCase(), senha)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    this.notificationService.abrirSnackBar(error.error);
                    this.loading = false;
                }
            );
    }

    resetarSenha() {
        this.router.navigate(['/auth/senha-reset-request']);
    }
}
