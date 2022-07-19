import { Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  miPortfolio:any=[];
  nuevoExperiencia : experiencia = {id:0, empleo:' ', descripcionEmpleo: ' '};
  editarExperiencia : experiencia = {id:0, empleo: ' ', descripcionEmpleo: ' '};


  constructor(private datosPortfolio:ExperienciaService, public SGguard:SGGuard) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerExp().subscribe((datos:any[])=>{this.miPortfolio.push(datos)}); 
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