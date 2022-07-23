import { Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPortfolio:any=[];
  mensajeDeError:String="";
  mensajeDeEnvio:String="";
  noTieneContenido:boolean=false; 
  guard=this.SGguard //para poder usar el guard que es private
  
  nuevoProyecto : Proyectos = {id: 0, proNombre: ' ', 
    proFecha : ' ', proLink: ' ', proImg : ' ', proDescripcion: ' ' }

  editarProyectos : Proyectos = {id: 0, proNombre: ' ', 
    proFecha: ' ', proLink: ' ', proImg: ' ', proDescripcion: ' ' }

    
    myModal: any = document.getElementById('myModal');
    myInput: any = document.getElementById('myInput');


 constructor(private datosPortfolio:ProyectosService, private SGguard:SGGuard) { }
 
 modal(){
   this.myModal.addEventListener('shown.bs.modale',  () => {
     this.myInput.focus()
    })} 
    
    ngOnInit(): void {
      this.datosPortfolio.obtenerProyectos().subscribe((datos: any)=>{this.miPortfolio.push(datos)})
    }    
    
    onFileChanged(e:any){
      this.editarProyectos.proImg = e[0].base64
      this.nuevoProyecto.proImg = e[0].base64
    }

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
        this.datosPortfolio.sumarProyectos(this.nuevoProyecto).subscribe(
          data => {
            console.log(data); 
            window.location.reload()} );
          }
        
        editarPro(){
                this.datosPortfolio.editProyectos(this.editarProyectos,this.editarProyectos.id).subscribe(
                data => {
                  console.log(data);
                  window.location.reload()});
                } 
                
              editarImgPro(){
               if ( this.editarProyectos.proImg == null){
                 this.mensajeDeError = "Es obligatorio enviar una imagen";
                 this.noTieneContenido = true}
                 else{ this.datosPortfolio.editImgProyectos(this.editarProyectos,this.editarProyectos.id).subscribe((data: any)=>{
                   this.mensajeDeEnvio = "La imagen fue enviada correctamente";
                   this.noTieneContenido = false
                   window.location.reload()})
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