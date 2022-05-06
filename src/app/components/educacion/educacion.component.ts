import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { throttleTime } from 'rxjs';
import { AutenticacionService} from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miPortfolio:any=[];
 
 /*  nuevo:any=[]; */ //agregado para que llegen aca los nuevos datos

  nuevoEducacion : educacion = {id: 0, titulo:' ', nivelEducativo: ' ', institucion: ' ' }

  editarEducacion : educacion = {id: 0, titulo:' ', nivelEducativo: ' ', institucion: ' ' }

  botonEditEducacion:boolean = true;
  


  constructor(private datosPortfolio:AutenticacionService, private cd:ChangeDetectorRef) { 

  }

  ngOnInit(): void {
    /* this.datosPortfolio.obtenerEdu().subscribe(data=>{
      this.miPortfolio=data; */
      this.datosPortfolio.obtenerEdu().subscribe((datos: any[])=>{this.miPortfolio.push(datos)}) 
    
}
ngAfterViewChecked():void{
  if(this.datosPortfolio.funciona==false){
    this.botonEditEducacion = false;
  }
  this.cd.detectChanges();
} 

editar(id:any,x:any,l:any,r:any){
  this.editarEducacion.id=id
  this.editarEducacion.titulo=x
  this.editarEducacion.nivelEducativo=l
  this.editarEducacion.institucion=r
  }

/* agregar(){ //agregado de igualdadaes para que funcione
  this.editarEducacion=this.nuevo;
  this.nuevo=this.nuevoEducacion
} */

verEd(){
  this.datosPortfolio.obtenerEdu().subscribe(data=>{
    console.log(data);
    this.miPortfolio=data [0]})
  }

agregarEd(){
  this.datosPortfolio.sumarEdu(this.nuevoEducacion).subscribe(
  data => {
  console.log(data); } );
}

editarEd(){
  this.datosPortfolio.editEdu(this.editarEducacion, this.editarEducacion.id).subscribe(
  data => {
  console.log(data); } );
  }
    
/* aca esta el delete de todo el elemento */
borradoCompleto(){
   this.datosPortfolio.borrarEdu(this.editarEducacion.id).subscribe((data:any) =>   {return data})}

   
}

export interface educacion {
  id:Number;
  titulo:String;
  nivelEducativo: String;
  institucion:String;
}