import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
miPortfolio:any=[];

editarAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ', email:' ', fechaNacimiento:' ',  imgPerfil : ' ',imgRepresentativa:' ', telefono:' ', urlCV:' ' };
  
myModal: any = document.getElementById('myModal');
myInput: any = document.getElementById('myInput');
mensajeDeError:String="";
mensajeDeEnvio:String="";
noTieneContenido:boolean=false;

constructor(private datosPortfolio:AcercaDeService,private cd:ChangeDetectorRef, public SGguard:SGGuard) { 
}

 modal(){
  this.myModal.addEventListener('shown.bs.modale',  () => {
 this.myInput.focus()
 })} 

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data: any[])=>{
    this.miPortfolio=data[0]})   
  }

  ngAfterViewChecked():void{
   
  }  

  editar(){
    this.editarAcerca=this.miPortfolio;
  }

  onFileChanged(e:any){
    this.editarAcerca.imgPerfil = e[0].base64
    }
  
editarImgPerf(){
  if ( this.editarAcerca.imgPerfil == " "){
    this.mensajeDeError = "Es obligatorio enviar una imagen";
  this.noTieneContenido = true}
   else{ this.datosPortfolio.editImgPerfil(this.editarAcerca).subscribe((data: any)=>{
    this.mensajeDeEnvio = "La imagen fue enviada correctamente";
    this.noTieneContenido = false})
  }

}
  verDatos(){
    this.datosPortfolio.obtenerDatos().subscribe((data: any[])=>{
    console.log(data);
    this.miPortfolio=data [0]}) 
  }

    mirarDatos(id:string){
    this.datosPortfolio.obtenerDatosID(id).subscribe((data: any[])=>{
    console.log(data);
    this.miPortfolio=data [0]})
  }

 editarDatos(){
    this.datosPortfolio.editDatos(this.editarAcerca).subscribe(
    (data: any) => {
    console.log(data); } );
  }

  eliminarDatos(){
    this.editarAcerca.nombres="";
    this.editarAcerca.apellidos="";
    this.editarAcerca.ocupacion="";
    this.editarAcerca.sobremi="";
    this.editarAcerca.email="";
    this.editarAcerca.telefono="";
    this.editarAcerca.urlCV="";
    this.datosPortfolio.editDatos(this.editarAcerca).subscribe(
      (data:any)=>{
        console.log(data);});
      }

  // en este component decidi no hacer peticiones ni para eliminar ni para crear, ya que siempre sera la misma persona y los mismos datos. la funcion eliminarDatos() , esta funcionando realmente con un PUT que reemplaza los datos existentes por string vacio, esto solo será de esta manera para este componente y el resto de los componentes si tendra una opcion de eliminacion utilizando DELETE.


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