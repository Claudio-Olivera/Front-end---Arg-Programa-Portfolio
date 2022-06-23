import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
funciona:boolean=true;
cerrarfunciona:boolean=false;

urls:string = "https://claudioolivera.herokuapp.com" ;
url="https://claudioolivera.herokuapp.com/auth/login";

//url="http://localhost:8080/auth/login";
//urls = "http://localhost:8080";

currentUserSubject:BehaviorSubject<any>;
constructor(private http:HttpClient) { 
  
  console.log("El servicio de autenticacion esta corriendo");
  this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current user') || '{}'))
  
}
//acerca de
obtenerDatos():Observable<any>{
  return this.http.get(this.urls+"/ver/persona"); //aca va la url request de datos
}

  obtenerDatosID(id:string):Observable<any>{
    return this.http.get(this.urls+"/persona/detail/"+id); 
  }

  sumarDatos(arr : Acercade):Observable<any>{
  return this.http.post(this.urls+"/new/persona", arr );
  }

  editDatos( arr :  Acercade):Observable<any>{
  return this.http.put(this.urls+"/actualizar/"+1, arr);
}

editImgPerfil( arr:  Acercade):Observable<any>{
  return this.http.put(this.urls+"/actualizarImgPerfil/"+1, arr);
}

editImgRepresentativa(arr: Acercade):Observable<any>{
  return this.http.put(this.urls+"//actualizarImgRepresentativa/"+1,arr);
}

//experiencia
obtenerExp():Observable<any>{
  return this.http.get(this.urls+"/ver/experiencia"); //aca va la url request de datos
}

sumarExp(arr : experiencia):Observable<any>{
return this.http.post(this.urls+"/new/experiencia", arr );
}

editExp( arr :  experiencia, id:any):Observable<any>{
  return this.http.put(this.urls+"/modExp/"+id, arr);
}

borrarExp(id:any):Observable<any>{
  return this.http.delete(this.urls+"/borrarExperiencia/"+id);
  }



  //educacion
  obtenerEdu():Observable<any>{
    return this.http.get(this.urls+"/ver/educacion"); //aca va la url request de datos
  }

  sumarEdu(arr : educacion):Observable<any>{
  return this.http.post(this.urls+"/new/educacion", arr );
  }

  editEdu( arr :  educacion, id:any):Observable<any>{
  return this.http.put(this.urls+"/modEducacion/"+id, arr);
  }
/* aca esta el delete de todo el elemento */
  borrarEdu(id:any):Observable<any>{
    return this.http.delete(this.urls+"/borrarEducacion/"+id);
    }
   
  
  //hard Skills
  obtenerHard():Observable<any>{
    return this.http.get(this.urls+"/ver/Hard"); //aca va la url request de datos
  }

  sumarHard(arr : Hard):Observable<any>{
  return this.http.post(this.urls+"/new/Hard", arr );
  }

  editHard(arr :  Hard,id:any):Observable<any>{
  return this.http.put(this.urls+"/modHard/"+id, arr);
}

//Soft Skills

obtenerSoft():Observable<any>{
  return this.http.get(this.urls+"/ver/Soft"); //aca va la url request de datos
}

sumarSoft(arr : Soft):Observable<any>{
return this.http.post(this.urls+"/new/Soft", arr );
}

editSoft(id:any , arr :Soft):Observable<any>{
return this.http.put(this.urls+"/modSoft/"+id, arr);
}

borrarSoft(id:any):Observable<any>{
  return this.http.delete(this.urls+"/borrarSoft/"+id)
}


//Proyectos
obtenerProyectos():Observable<any>{
  return this.http.get(this.urls+"/ver/Proyectos"); //aca va la url request de datos
}
//datos
sumarProyectos(arr : Proyectos):Observable<any>{
return this.http.post(this.urls+"/new/Proyectos", arr );
}

editProyectosUno( arr :  Proyectos):Observable<any>{
return this.http.put(this.urls+"/modProyectosUno/"+10, arr);
}
editProyectosDos( arr :  Proyectos):Observable<any>{
  return this.http.put(this.urls+"/modProyectosDos/"+10, arr);
  }
  editProyectosTres( arr :  Proyectos):Observable<any>{
    return this.http.put(this.urls+"/modProyectosTres/"+10, arr);
    }
//imagenes
editImgProyectosUno( arr :  Proyectos):Observable<any>{
  return this.http.put(this.urls+"/modImgProyectosUno/"+10, arr);
  }
  editImgProyectosDos( arr :  Proyectos):Observable<any>{
    return this.http.put(this.urls+"/modImgProyectosDos/"+10, arr);
    }
    editImgProyectosTres( arr :  Proyectos):Observable<any>{
      return this.http.put(this.urls+"/modImgProyectosTres/"+10, arr);
      }


IniciarSesion(credenciales:any):Observable<any>{
  return this.http.post(this.url, credenciales).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data); //linea faltante que no dejaba funcionar bien el interceptor
    this.funciona = !this.funciona;
    return data;
    }))
  }

  CerrarSesion(credenciales1:any){
    return this.http.delete(this.url, credenciales1).pipe(map(data1=>{
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      return data1;
      }))

    }


  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value; 
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

export interface experiencia{
  id:Number;
  empleo: String;
  descripcionEmpleo:String;

}

export interface educacion {
  id:Number;
   titulo:String;
   nivelEducativo: String;
   institucion:String;
}

export interface  Hard {
  primercirculo:Number;
  segundocirculo:Number;
  tercercirculo:Number;
  cuartocirculo:Number;
  quintocirculo:Number;
  sextocirculo:Number;
}
export interface Soft{
  id:Number;
  softTitulo:String;
  softDescripcion:String;
  icono:String;
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