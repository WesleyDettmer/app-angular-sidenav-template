import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as moment from 'moment';

import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, senha: string) {
        return of(true)
            .pipe(delay(1000),
                map((/*response*/) => {
                    this.localStorage.setItem('usuarioAtual', JSON.stringify({
                        token: '2173891127dshjksahd32qsdkhjxd',
                        isAdmin: true,
                        email: 'usuario.teste@outlook.com',
                        id: '1',
                        alias: 'usuario',
                        expiration: moment().add(10, 'days').toDate(),
                        fullName: 'Usuario'
                    }));

                    return true;
                }));
    }

    logout(): void {
        this.localStorage.removeItem('usuarioAtual');
    }

    getUsuarioAtual(): any {
        return {
            token: '2173891127dshjksahd32qsdkhjxd',
            isAdmin: true,
            email: 'usuario.teste@outlook.com',
            id: '1',
            alias: 'usuario',
            expiration: moment().add(10, 'days').toDate(),
            fullName: 'Usuario'
        };
    }

    pedidoResetarSenha(email: string) {
        return of(true).pipe(delay(1000));
    }

    trocarSenha(email: string, senhaAtual: string, novaSenha: string) {
        return of(true).pipe(delay(1000));
    }

    resetarSenha(email: string, token: string, senha: string, confirmarSenha: string): any {
        return of(true).pipe(delay(1000));
    }
}
