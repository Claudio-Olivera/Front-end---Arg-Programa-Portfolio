import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  miPortfolios:any=[];
  botonEditHardSoft:boolean = true;

/*   font:any="fa-solid fa-square-plus bg-primary" */
  nuevoSoft : Soft = {id:0, softTitulo:' ', softDescripcion:' ', icono:' '}  
  editarSoft: Soft = {id:0, softTitulo:' ', softDescripcion:' ', icono:' '}

  constructor(@Inject(DOCUMENT)private document:Document,private datosPortfolio:AutenticacionService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerSoft().subscribe(
      (datos:any[])=>{this.miPortfolios.push(datos)})
  }

  ngAfterViewChecked():void{
    if(this.datosPortfolio.funciona==false){
      this.botonEditHardSoft = false;
    }
    this.cd.detectChanges();
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
        window.location.reload(); } );
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