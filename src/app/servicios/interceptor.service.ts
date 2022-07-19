import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

import { AutenticacionService } from './autenticacion.service';

import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionService:AutenticacionService,private spinnerServ:SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerServ.llamarSpinner();
    
    var currentUser= this.autenticacionService.UsuarioAutenticado ;

    if(currentUser && currentUser.token){
      /* this.spinnerServ.detenerSpinner()  */
      //¿detener spinner si ya hay localStorage? ¿o dejo que sea cada vez que navego?
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    
    return next.handle(req).pipe(
      finalize ( () => this.spinnerServ.detenerSpinner())
      );   
    }

}
