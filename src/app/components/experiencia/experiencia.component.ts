import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { AutenticacionService} from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  miPortfolio:any=[];
  nuevoExperiencia : experiencia = {id:0, empleo:' ', descripcionEmpleo: ' '};
  editarExperiencia : experiencia = {id:0, empleo: ' ', descripcionEmpleo: ' '};
  botonEditExperiencia:boolean = true;

  constructor(private datosPortfolio:AutenticacionService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerExp().subscribe((datos:any[])=>{this.miPortfolio.push(datos)}); 
 
  }

  ngAfterViewChecked():void{
    if(this.datosPortfolio.funciona==false){
      this.botonEditExperiencia = false;
    }
    this.cd.detectChanges();
  } 

  editar(id:any, x:any,l:any){
 this.editarExperiencia.id=id
 this.editarExperiencia.empleo=x
 this.editarExperiencia.descripcionEmpleo=l
}


  verExp(){
    this.datosPortfolio.obtenerExp().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data [0]})
    }

  agregarExp(){
    this.datosPortfolio.sumarExp(this.nuevoExperiencia).subscribe(
    data => {
    console.log(data); } );
  }
  
  editarExp(){
    this.datosPortfolio.editExp(this.editarExperiencia, this.editarExperiencia.id).subscribe(
      data => {
        console.log(data); } );
      }
  
eliminarExp(){
  this.datosPortfolio.borrarExp(this.editarExperiencia.id).subscribe((data:any) => {return data})}

}

export interface experiencia{
  id:Number;
  empleo: String;
  descripcionEmpleo:String;
}