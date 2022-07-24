import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor(private autenticationService:AutenticacionService) { }

  obtenerDatos():Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/persona"); //aca va la url request de datos
  }

  editImgPerfil( arr:  Acercade):Observable<any>{
    return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgPerfil/"+1, arr);
  }
  
  editImgRepresentativa(arr: Acercade):Observable<any>{
    return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgRepresentativa/"+1,arr);
  }
}
export interface Acercade{
  nombres : string;
  apellidos: string;
  ocupacion:string;
  sobremi:string;
  email:string;
  fechaNacimiento:string;
  imgPerfil:string;
  imgRepresentativa:string;
}