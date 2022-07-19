import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPortfolio:any=[];
  
  nuevoProyecto : Proyectos = { proNombreUno:' ', 
    proFechaUno :' ', proLinkUno:' ',  proImgUno :' ',   proyectoDescripcionUno:' ',  proNombreDos:' ',  proFechaDos :' ', proLinkDos :' ',  proImgDos:' ',  proyectoDescripcionDos:' ',   proNombreTres:' ',   proFechaTres:' ',  proLinkTres:' ', proImgTres:' ', proyectoDescripcionTres:' '}

   editarProyectos : Proyectos = { proNombreUno:' ', 
    proFechaUno :' ', proLinkUno:' ',  proImgUno : ' ',   proyectoDescripcionUno:' ',  proNombreDos:' ',  proFechaDos :' ', proLinkDos :' ',  proImgDos:' ',  proyectoDescripcionDos:' ',   proNombreTres:' ',   proFechaTres:' ',  proLinkTres:' ', proImgTres:' ', proyectoDescripcionTres:' '}

    
    myModal: any = document.getElementById('myModal');
    myInput: any = document.getElementById('myInput');
    

 mensajeDeErrorUno:String="";
 mensajeDeEnvioUno:String="";
 noTieneContenidoUno:boolean=false;
 mensajeDeErrorDos:String="";
 mensajeDeEnvioDos:String="";
 noTieneContenidoDos:boolean=false;
 mensajeDeErrorTres:String="";
 mensajeDeEnvioTres:String="";
 noTieneContenidoTres:boolean=false;
 
 guard=this.SGguard


  constructor(private datosPortfolio:ProyectosService, private cd:ChangeDetectorRef, private SGguard:SGGuard) { }

  modal(){
    this.myModal.addEventListener('shown.bs.modale',  () => {
   this.myInput.focus()
  })} 
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerProyectos().subscribe(data=>{
 /*      console.log("Datos de Proyectos :"+ JSON.stringify(data)); */
      this.miPortfolio=data[0]})
    }
    

  CambioImgUno(e:any){
    this.editarProyectos.proImgUno = e[0].base64
    }
    CambioImgDos(a:any){
      this.editarProyectos.proImgDos = a[0].base64
      }
      CambioImgTres(s:any){
        this.editarProyectos.proImgTres = s[0].base64
        }
editarImgProUno(){
  if ( this.editarProyectos.proImgUno ==" "){
    this.mensajeDeErrorUno = "Es obligatorio enviar una imagen";
    this.noTieneContenidoUno = true;
   }
   else{ this.datosPortfolio.editImgProyectosUno(this.editarProyectos).subscribe((data: any)=>{
    this.mensajeDeEnvioUno = "La imagen fue enviada correctamente";
    this.noTieneContenidoUno = false}  )
    }
  }
  editarImgProDos(){
    if ( this.editarProyectos.proImgDos ==" "){
      this.noTieneContenidoDos = true; 
  this.mensajeDeErrorDos = "Es obligatorio enviar una imagen" }
     else{ this.datosPortfolio.editImgProyectosDos(this.editarProyectos).subscribe((data: any)=>{
      this.mensajeDeEnvioDos = "La imagen fue enviada correctamente";
      this.noTieneContenidoDos = false}  )
      }
    }
    editarImgProTres(){
      if ( this.editarProyectos.proImgTres ==" ")  {
        this.noTieneContenidoTres = true;
    this.mensajeDeErrorTres = "Es obligatorio enviar una imagen" }
       else{ this.datosPortfolio.editImgProyectosTres(this.editarProyectos).subscribe((data: any)=>{
        this.mensajeDeEnvioTres = "La imagen fue enviada correctamente";
        this.noTieneContenidoTres = false}  )
        }
      }

  verPro(){
    this.datosPortfolio.obtenerProyectos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data [0]})
    }

  agregarPro(){
    this.datosPortfolio.sumarProyectos(this.nuevoProyecto).subscribe(
    data => {
    console.log(data); } );
  }
  
      editarProUno(){
        this.datosPortfolio.editProyectosUno(this.editarProyectos).subscribe(
          data => {
            console.log(data); } );
          } 

          editarProDos(){
            this.datosPortfolio.editProyectosDos(this.editarProyectos).subscribe(
              data => {
                console.log(data); } );
              } 
              editarProTres(){
                this.datosPortfolio.editProyectosTres(this.editarProyectos).subscribe(
                  data => {
                    console.log(data); } );
                  } 
  
          eliminarProUno(){
            this.editarProyectos. proNombreUno="";
            this.editarProyectos.proFechaUno="";
            this.editarProyectos.proLinkUno=""
            this.editarProyectos.proyectoDescripcionUno="";
            this.datosPortfolio.editProyectosUno(this.editarProyectos).subscribe(
              (data:any)=>{
                console.log(data);});
          }

          eliminarProDos(){
             this.editarProyectos. proNombreDos="";
            this.editarProyectos.proFechaDos="";
            this.editarProyectos.proLinkDos=""
            this.editarProyectos.proyectoDescripcionDos="";
            this.datosPortfolio.editProyectosDos(this.editarProyectos).subscribe(
              (data:any)=>{
                console.log(data);});
          }

          eliminarProTres(){
            this.editarProyectos. proNombreTres="";
            this.editarProyectos.proFechaTres="";
            this.editarProyectos.proLinkTres=""
            this.editarProyectos.proyectoDescripcionTres=""; 
            this.datosPortfolio.editProyectosTres(this.editarProyectos).subscribe(
              (data:any)=>{
                console.log(data);});
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