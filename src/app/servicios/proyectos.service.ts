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
  return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/Proyectos"); //aca va la url request de datos
}
//datos
sumarProyectos(arr : Proyectos):Observable<any>{
return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/Proyectos", arr );
}

editProyectosUno( arr :  Proyectos):Observable<any>{
return this.autenticationService.Cliente.put(this.autenticationService.url+"/modProyectosUno/"+10, arr);
}
editProyectosDos( arr :  Proyectos):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modProyectosDos/"+10, arr);
  }
  editProyectosTres( arr :  Proyectos):Observable<any>{
    return this.autenticationService.Cliente.put(this.autenticationService.url+"/modProyectosTres/"+10, arr);
    }
//imagenes
editImgProyectosUno( arr :  Proyectos):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/modImgProyectosUno/"+10, arr);
  }
  editImgProyectosDos( arr :  Proyectos):Observable<any>{
    return this.autenticationService.Cliente.put(this.autenticationService.url+"/modImgProyectosDos/"+10, arr);
    }
    editImgProyectosTres( arr :  Proyectos):Observable<any>{
      return this.autenticationService.Cliente.put(this.autenticationService.url+"/modImgProyectosTres/"+10, arr);
      }

}

export interface Proyectos {
  proNombreUno:String; 
  proFechaUno :String;
  proLinkUno:String; 
  proImgUno :String; 
  proyectoDescripcionUno:String; 
  
  proNombreDos:String; 
  proFechaDos :String; 
  proLinkDos :String; 
  proImgDos :String; 
  proyectoDescripcionDos:String; 
  
  proNombreTres:String; 
  proFechaTres:String; 
  proLinkTres:String; 
  proImgTres:String; 
  proyectoDescripcionTres:String; 
  
  }