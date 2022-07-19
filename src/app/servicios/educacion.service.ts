import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private autenticationService:AutenticacionService) { }
  
  obtenerEdu():Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/educacion"); //aca va la url request de datos
  }

  sumarEdu(arr : educacion):Observable<any>{
  return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/educacion", arr );
  }

  editEdu( arr :  educacion, id:any):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modEducacion/"+id, arr);
  }

  borrarEdu(id:any):Observable<any>{
    return this.autenticationService.Cliente.delete(this.autenticationService.url+"/borrarEducacion/"+id);
    }
  
}
export interface educacion {
  id:Number;
   titulo:String;
   nivelEducativo: String;
   institucion:String;
}