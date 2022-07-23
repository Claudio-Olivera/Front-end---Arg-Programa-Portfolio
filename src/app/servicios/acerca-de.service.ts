import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

constructor(private autenticationService:AutenticacionService) { }

//acerca de
obtenerDatos():Observable<any>{
  return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/persona"); 
}

  obtenerDatosID(id:string):Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/persona/detail/"+id); 
  }

  editDatos( arr :  Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizar/"+1, arr);
}

editImgPerfil( arr:  Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgPerfil/"+1, arr);
}

editImgRepresentativa(arr: Acercade):Observable<any>{
  return this.autenticationService.Cliente.put(this.autenticationService.url+"/actualizarImgRepresentativa/"+1,arr);
}
// En este service decidí no hacer peticiones ni para eliminar ni para crear, ya que siempre será la misma persona y los mismos datos (no sumaré nuevos). al no eliminar los datos siempre trabajará sobre la misma id , la cual la coloqué directamente aquí en los service. El resto de servicios de los componentes si trabajarán tomando la id correspondiente al elemento , tendrán la opción de crear nuevos y de borrar con uso de DELETE

//Por si lo notan, no estoy usando en el html, todos los datos que estoy recibiendo, esto es, porque no quiero que esos datos como lo es el NOMBRE, APELLIDO y OCUPACION tengan que llegar desde la db para ser mostrados. Por eso decidi ponerlos directamente en el html, sin usar las respectivas iterpolaciones. 

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
  telefono:string;
  urlCV:string;
}