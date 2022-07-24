import { Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { SkillsService } from 'src/app/servicios/hard.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  miPortfolio: any = [];
  guard = this.SGguard

  editarHards: Hard = { id: 0, circulo: 0, icono: ' ', nombre: ' ', color: ' ' }
  nuevoHard: Hard = { id: 0, circulo: 0, icono: ' ', nombre: ' ', color: ' ' }

  botonEditHardSoft: boolean = true;

  arrayDeEstilos: any = []
  constructor(private SGguard: SGGuard, private datosPortfolio: SkillsService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerHard().subscribe((datos: any[]) => { this.miPortfolio.push(datos) })
  }

  ngAfterViewChecked() {
  }

  editar(id: any, circulo: any, icono: any, nombre: any, color: any) {
    this.editarHards.id = id
    this.editarHards.circulo = circulo
    this.editarHards.icono = icono
    this.editarHards.nombre = nombre
    this.editarHards.color = color
  }

  editarH() {
    this.datosPortfolio.editHard(this.editarHards, this.editarHards.id).subscribe(
      data => {
        window.location.reload()
      });
  }

  agregarHard() {
    this.datosPortfolio.sumarHard(this.nuevoHard).subscribe(data => {
      window.location.reload()
    });
  }

  eliminarHard() {
    this.datosPortfolio.borrarHard(this.editarHards.id).subscribe((data: any) => {
      window.location.reload()
      return data
    }
    )
  }
  /* cabe destacar que para hacer la animacion , antes de implementar en el proyecto ng-circle-progress ,aquí utilizaba una clase circulos, y creaba a partir de ella los circulos con su correspondiente animación, pero si bien funcionaba en ordenador, cuando se visualizaba en móvil, la animación no se veía correctamente, y los conocimientos que tengo (de momento) no me alcanzaron para solucionar el problema ,por lo cual preferí utilizar ng-circle-progrress, lo cual "semi-soluciona" el problema y ahorra escribir codigo */

}
export interface Hard {
  id: Number;
  circulo: Number;
  icono: String;
  nombre: String;
  color: String;
}