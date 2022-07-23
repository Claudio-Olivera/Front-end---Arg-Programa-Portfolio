import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private autenticationService:AutenticacionService) { }

  obtenerHard():Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/Hard"); //aca va la url request de datos
  }

  sumarHard(arr : Hard):Observable<any>{
  return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/Hard", arr );
  }

  editHard(arr :  Hard,id:any):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modHard/"+id, arr);
}

  
borrarHard(id:any):Observable<any>{
  return this.autenticationService.Cliente.delete(this.autenticationService.url+"/borrarHard/"+id);
  }



}
export interface  Hard {
  id:Number;
  circulo:Number;
  icono:String;
  nombre:String;
  color:String;
}