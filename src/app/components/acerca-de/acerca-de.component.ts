import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HammerGestureConfig, HAMMER_LOADER } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SGGuard } from 'src/app/guard/sg.guard';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { AutenticacionService} from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  

  miPortfolio:any=[];

  nuevoAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ', email:' ', fechaNacimiento: ' ',  imgPerfil : ' ',imgRepresentativa:' ' };

  editarAcerca : Acercade = { nombres:' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ', email:' ', fechaNacimiento:' ',  imgPerfil : ' ',imgRepresentativa:' ' };
  


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

  agregarDatos(){
    this.datosPortfolio.sumarDatos(this.nuevoAcerca).subscribe(
    (data: any) => {
    console.log(data);});
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
    this.datosPortfolio.editDatos(this.editarAcerca).subscribe(
      (data:any)=>{
        console.log(data);});
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