import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AutenticacionService {
/* url:string = "https://claudiooliveraportfolio.up.railway.app" ; utilizada para hacer pruebas debido a las constantes caidas de heroku*/
/* url = "http://localhost:8080"; */

url:string = "https://claudio-olivera-gonz-portfolio.herokuapp.com";

currentUserSubject:BehaviorSubject<any>;
Cliente=this.http;

constructor(private http:HttpClient) { 
  console.log("El servicio de autenticacion esta corriendo");
  this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'))
}

ngOnInit(){
}

IniciarSesion(credenciales:any):Observable<any>{
  return this.http.post(this.url+"/auth/login", credenciales).pipe(map(data=>{
    localStorage.setItem('currentUser', JSON.stringify(data)); 
    this.currentUserSubject.next(data);
    return data;
    }))
  }

  CerrarSesion(credencialesCierre:any){
    return this.http.delete(this.url+"/auth/login", credencialesCierre).pipe(map(data1=>{
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      return data1;
      }))
    }

  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value; 
  }

}


