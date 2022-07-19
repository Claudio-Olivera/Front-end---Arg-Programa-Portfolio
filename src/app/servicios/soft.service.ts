import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  constructor(private autenticationService:AutenticacionService) { }

  obtenerSoft():Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/Soft"); //aca va la url request de datos
  }
  
  sumarSoft(arr : Soft):Observable<any>{
  return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/Soft", arr );
  }
  
  editSoft(id:any , arr :Soft):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modSoft/"+id, arr);
  }
  
  borrarSoft(id:any):Observable<any>{
    return this.autenticationService.Cliente.delete(this.autenticationService.url+"/borrarSoft/"+id)
  }


}
export interface Soft{
  id:Number;
  softTitulo:String;
  softDescripcion:String;
  icono:String;
}
