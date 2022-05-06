import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject, ChangeDetectorRef } from '@angular/core';
import { AutenticacionService} from 'src/app/servicios/autenticacion.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  miPortfolio:any=[];
  valorCirculo:any=[];
 

  editarHard : Hard = {id:0, primercirculo : 0,segundocirculo: 0 ,tercercirculo: 0, cuartocirculo: 0, quintocirculo: 0, sextocirculo: 0 } 

  botonEditHardSoft:boolean = true;

  constructor(@Inject(DOCUMENT)private document:Document,private datosPortfolio:AutenticacionService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerHard().subscribe((datos:any[])=>{this.miPortfolio.push(datos)})
    
  }

  ngAfterViewChecked():void{
    if(this.datosPortfolio.funciona==false){
      this.botonEditHardSoft = false;
    }
    this.cd.detectChanges();
  } 


  editarHards(id:any,x:any,l:any,r:any,s:any){
  
  this.editarHard.id=id
  this.editarHard.primercirculo=x
  this.editarHard.segundocirculo=l
  this.editarHard.tercercirculo=r
  this.editarHard.cuartocirculo=s

  }

//hard
  verH(){
    this.datosPortfolio.obtenerHard().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data [0]})
    }

  editarH(){
    this.datosPortfolio.editHard( this.editarHard,this.editarHard.id).subscribe(
      data => {
        console.log(data); } );
      }

  


  @HostListener ("window:scroll")//para que funcione import de hostlistener

  funcionDelScroll (){
     const yOffSet = window.pageYOffset;
     const scrollTop = this.document.documentElement.scrollTop;//para que funcione inject en constructor e import de document
     if ((yOffSet || scrollTop) > 300 && (yOffSet || scrollTop) < 400 ){
      
      for (let n of this.miPortfolio){
        for (let z of n){
          this.valorCirculo= z
     let circuloA = new Circulos((".valor-one"),(".circulo-one"),(this.valorCirculo.primercirculo));
     let circuloB = new Circulos((".valor-two"),(".circulo-two"),(this.valorCirculo.segundocirculo));
     let circuloC = new Circulos((".valor-three"),(".circulo-three"),(this.valorCirculo.tercercirculo));
     let circuloD = new Circulos((".valor-four"),(".circulo-four"),(this.valorCirculo.cuartocirculo));

      }
     }  
    }
  }
}

class Circulos {
  public progressValue:number = 0;
  public speed: number = 15
  public progressEndValue :number = 0;
  public stopper:any ; 
          constructor(a:string, b:string, st:number){
    
    this.progressEndValue = st
    let stopper=
    setInterval(() => {
      
      let o :any = document.querySelector(a)
      let p :any = document.querySelector(b)
      this.progressValue++;
      o.textContent = `${this.progressValue}%`;
      p.style.background = `conic-gradient(
        #0058ff ${this.progressValue * 3.6}deg,
        #71c9ce ${this.progressValue * 3.9}deg
        )`;
        if (this.progressValue == this.progressEndValue) {
          clearInterval(stopper);
        }
      },this.speed);  
    }
  } 
  export interface  Hard {
    id:Number;
    primercirculo:Number;
    segundocirculo:Number;
    tercercirculo:Number;
    cuartocirculo:Number;
    quintocirculo:Number;
    sextocirculo:Number;
    }
   