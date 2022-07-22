import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { SGGuard } from 'src/app/guard/sg.guard';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPortfolio:any=[];
  
  nuevoProyecto : Proyectos = {id: 0, proNombre: ' ', 
    proFecha : ' ', proLink: ' ', proImg : ' ', proDescripcion: ' ' }

  editarProyectos : Proyectos = {id: 0, proNombre: ' ', 
    proFecha: ' ', proLink: ' ', proImg: ' ', proDescripcion: ' ' }

    
    myModal: any = document.getElementById('myModal');
    myInput: any = document.getElementById('myInput');
    

 mensajeDeError:String="";
 mensajeDeEnvio:String="";
 noTieneContenido:boolean=false;
 
 
 guard=this.SGguard

 constructor(private datosPortfolio:ProyectosService, private cd:ChangeDetectorRef, private SGguard:SGGuard) { }
 
 modal(){
   this.myModal.addEventListener('shown.bs.modale',  () => {
     this.myInput.focus()
    })} 
    
    ngOnInit(): void {
      this.datosPortfolio.obtenerProyectos().subscribe((datos: any)=>{this.miPortfolio.push(datos)})
     
     
    }    
    
  
  
   /*    this.mybreakpoint = (event.target.innerWidth >= 1000) ? 3:1;
      this.mybreakpoint = (event.target.innerWidth >= 1400) ? 4:1; */
      /* this.mybreakpoint = (event.target.innerWidth >= 1000)? 3:1; */
   

      

    onFileChanged(e:any){
      this.editarProyectos.proImg = e[0].base64
      this.nuevoProyecto.proImg = e[0].base64
    }

 /*  cambioImg(e:any){
    this.editarProyectos.proImg = e[0].base64
    } */
  
 /*    editarImgPro(){
      if ( this.editarProyectos.proImg == " "){
        this.mensajeDeError = "Es obligatorio enviar una imagen";
        this.noTieneContenido = true}
        else{ this.datosPortfolio.editImgProyectos(this.editarProyectos,this.editarProyectos.id).subscribe((data: any)=>{
          this.mensajeDeEnvio = "La imagen fue enviada correctamente";
          this.noTieneContenido = false
          window.location.reload()})
        }
      } */
  

  editar(id:any,k:any,l:any,m:any,n:any,o:any){
    this.editarProyectos.id=id
    this.editarProyectos.proNombre=k
    this.editarProyectos.proFecha=l
    this.editarProyectos.proLink=m
    this.editarProyectos.proDescripcion=n
    this.editarProyectos.proImg=o
    }
  

  verPro(){
    this.datosPortfolio.obtenerProyectos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data [0]})
    }

  agregarPro(){
    if ( this.nuevoProyecto.proImg == " "){
      this.mensajeDeError = "Es obligatorio enviar una imagen";
      this.noTieneContenido = true}
      else{
        this.datosPortfolio.sumarProyectos(this.nuevoProyecto).subscribe(
          data => {
            this.mensajeDeEnvio = "La imagen fue enviada correctamente";
            this.noTieneContenido = false; 
            console.log(data); 
            window.location.reload()} );
          }
  }
  
      editarPro(){
        if ( this.editarProyectos.proImg == undefined){
          this.mensajeDeError = "Es obligatorio enviar una imagen";
          this.noTieneContenido = true}
          else{
            this.datosPortfolio.editProyectos(this.editarProyectos,this.editarProyectos.id).subscribe(
              data => {
                this.mensajeDeEnvio = "La imagen fue enviada correctamente";
                this.noTieneContenido = false; 
                console.log(data);
                window.location.reload()});
              } 
        }

   
  
          eliminarPro(){
            this.datosPortfolio.borrarPro(this.editarProyectos.id).subscribe((data:any)=>{window.location.reload()})
          }


}
export interface Proyectos {
  id:number;
  proNombre:String; 
  proFecha :String;
  proLink:String; 
  proImg :String; 
  proDescripcion:String; 
  }