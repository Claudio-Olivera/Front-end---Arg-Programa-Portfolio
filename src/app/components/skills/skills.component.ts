import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SGGuard } from 'src/app/guard/sg.guard';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  miPortfolio:any=[];
  valorCirculo:any=[];
  NumeroDePasadas :number = 0


  editarHard : Hard = {id:0, primercirculo : 0,segundocirculo: 0 ,tercercirculo: 0, cuartocirculo: 0, quintocirculo: 0, sextocirculo: 0 } 
  botonEditHardSoft:boolean = true;
  
  constructor(private datosPortfolio:SkillsService, private cd:ChangeDetectorRef,private router: Router,public SGguard:SGGuard) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerHard().subscribe((datos:any[])=>{this.miPortfolio.push(datos)})
    let stopper=
   setInterval(()=>{
    for (let n of this.miPortfolio){
      for (let z of n){
        this.NumeroDePasadas +=1
        this.valorCirculo = z
        let circuloA = new Circulos((".valor-one"),(".circulo-one"),(this.valorCirculo.primercirculo));
        let circuloB = new Circulos((".valor-two"),(".circulo-two"),(this.valorCirculo.segundocirculo));
        let circuloC = new Circulos((".valor-three"),(".circulo-three"),(this.valorCirculo.tercercirculo));
        let circuloD = new Circulos((".valor-four"),(".circulo-four"),(this.valorCirculo.cuartocirculo));
        let circuloE = new Circulos((".valor-five"),(".circulo-five"),(this.valorCirculo.quintocirculo));
        let circuloF = new Circulos((".valor-six"),(".circulo-six"),(this.valorCirculo.sextocirculo));
        }  
      }if(this.NumeroDePasadas == 6){
        clearInterval(stopper);}})
  }
  

  editarHards(id:any,uno:any,dos:any,tres:any,cuatro:any,cinco:any, seis:any){
    this.editarHard.id=id
    this.editarHard.primercirculo=uno
    this.editarHard.segundocirculo=dos
    this.editarHard.tercercirculo=tres
    this.editarHard.cuartocirculo=cuatro
    this.editarHard.quintocirculo=cinco
    this.editarHard.sextocirculo=seis
  }
  
  //hard
  verH(){
    this.datosPortfolio.obtenerHard().subscribe(data=>{
      this.miPortfolio=data [0]})
        }
  
  editarH(){
    this.datosPortfolio.editHard( this.editarHard,this.editarHard.id).subscribe(
        data => {} );
        } 
        
  }
  
class Circulos {
  private progressValue:number = 0;
  private speed: number = 5
  private progressEndValue :number = 0;
  private stopper:any ; 
 
  constructor(a:string, b:string, st:number){
    this.progressEndValue = st
    let o :any = document.querySelector(a)
    let p :any = document.querySelector(b)
    let stopper=
    setInterval(() => {
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
   