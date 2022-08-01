import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './globar-error.handler';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlanetaServices {
    constructor(
        private http: HttpClient,
        private errorHandlerService: ErrorHandlerService
    ) { }

    getPlanetByIdService(planetId: number): Observable<any> {
        return this.http.get(environment.apiUrls.principal + `/planets/${planetId}`)
            .pipe(catchError(error => this.errorHandlerService.handleError(error)));
    }

    getPlanetList(): Observable<any> {
        return this.http.get(environment.apiUrls.principal + `/planets/`)
            .pipe(catchError(error => this.errorHandlerService.handleError(error)));
    }

}

