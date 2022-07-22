import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  funciona:boolean=true;
  constructor(private autenticationService:AutenticacionService) { }

//acerca de
obtenerDatos():Observable<any>{
  return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/persona"); //aca va la url request de datos
}

  obtenerDatosID(id:string):Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/persona/detail/"+id); 
  }

  sumarDatos(arr : Acercade):Observable<any>{
  return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/persona", arr );
  }

  editDatos( arr :  Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizar/"+3, arr);
}

editImgPerfil( arr:  Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgPerfil/"+3, arr);
}

editImgRepresentativa(arr: Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgRepresentativa/"+3,arr);
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