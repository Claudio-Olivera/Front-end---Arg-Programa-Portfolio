import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private autenticationService:AutenticacionService) { }

  obtenerExp():Observable<any>{
    return this.autenticationService.Cliente.get(this.autenticationService.url+"/ver/experiencia"); //aca va la url request de datos
  }
  
  sumarExp(arr : experiencia):Observable<any>{
  return this.autenticationService.Cliente.post(this.autenticationService.url+"/new/experiencia", arr );
  }
  
  editExp( arr :  experiencia, id:any):Observable<any>{
    return this.autenticationService.Cliente.put(this.autenticationService.url+"/modExp/"+id, arr);
  }
  
  borrarExp(id:any):Observable<any>{
    return this.autenticationService.Cliente.delete(this.autenticationService.url+"/borrarExperiencia/"+id);
    }

}
export interface experiencia{
  id:Number;
  empleo: String;
  descripcionEmpleo:String;

}