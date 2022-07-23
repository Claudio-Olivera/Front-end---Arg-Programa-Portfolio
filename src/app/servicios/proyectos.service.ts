import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private autenticationService:AutenticacionService) { }


//Proyectos
obtenerProyectos():Observable<any>{
  return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/Proyectos"); 
}

sumarProyectos(arr : Proyectos):Observable<any>{
return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/Proyectos", arr );
}

editProyectos( arr :  Proyectos, id:any):Observable<any>{
return this.autenticationService.Cliente.put(this.autenticationService.url+"/modProyectos/"+id, arr);
}

//Imagenes de proyectos
editImgProyectos( arr :  Proyectos, id:any):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modImgProyectos/"+id, arr);
}

borrarPro(id:any):Observable<any>{
  return this.autenticationService.Cliente.delete(this.autenticationService.url+"/borrarProyectos/"+id);
  }
 
}

export interface Proyectos {
  id:number;
  proNombre:String; 
  proFecha :String;
  proLink:String; 
  proImg:String; 
  proDescripcion:String; 
  }