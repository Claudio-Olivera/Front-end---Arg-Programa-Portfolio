
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { SoftService } from 'src/app/servicios/soft.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  miPortfolios:any=[];

  nuevoSoft : Soft = {id:0, softTitulo:' ', softDescripcion:' ', icono:' '}  
  editarSoft: Soft = {id:0, softTitulo:' ', softDescripcion:' ', icono:' '}

  constructor(private datosPortfolio:SoftService, public SGguard:SGGuard) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerSoft().subscribe(
      (datos:any[])=>{this.miPortfolios.push(datos)})
  }

 
  editar(id:any,x:any,l:any,m:any){
    this.editarSoft.id=id
    this.editarSoft.softTitulo=x
    this.editarSoft.softDescripcion=l
    this.editarSoft.icono=m
  }

  verS(){
    this.datosPortfolio.obtenerSoft().subscribe((data: any[])=>{
      console.log(data);
      this.miPortfolios=data [0]})
    }
  
  agregarS(){
    this.datosPortfolio.sumarSoft(this.nuevoSoft).subscribe(
      (data: any) => {
    console.log(data); } );
  }
  
  editarS(){
    this.datosPortfolio.editSoft(this.editarSoft.id, this.editarSoft).subscribe(
      (data: any) => {
        console.log(data)
        window.location.reload()
        window.focus(); } );
      }
  
  borrarS(){
    this.datosPortfolio.borrarSoft(this.editarSoft.id).subscribe((data:any)=>  {return data})}    
}

export interface Soft{
  id:Number;
  softTitulo:String;
  softDescripcion:String;
  icono:String;
  }