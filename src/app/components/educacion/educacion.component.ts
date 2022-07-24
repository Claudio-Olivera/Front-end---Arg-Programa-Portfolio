import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SGGuard } from 'src/app/guard/sg.guard';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miPortfolio: any = [];



  nuevoEducacion: educacion = { id: 0, titulo: ' ', nivelEducativo: ' ', institucion: ' ' }
  editarEducacion: educacion = { id: 0, titulo: ' ', nivelEducativo: ' ', institucion: ' ' }
  guard = this.SGguard



  constructor(private datosPortfolio: EducacionService, private SGguard: SGGuard, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerEdu().subscribe((datos: any[]) => { this.miPortfolio.push(datos) })
  }

  editar(id: any, x: any, l: any, r: any) {
    this.editarEducacion.id = id
    this.editarEducacion.titulo = x
    this.editarEducacion.nivelEducativo = l
    this.editarEducacion.institucion = r
  }

  verEd() {
    this.datosPortfolio.obtenerEdu().subscribe(data => {
      console.log(data);
      this.miPortfolio = data[0]
    })
  }

  agregarEd() {
    this.datosPortfolio.sumarEdu(this.nuevoEducacion).subscribe(
      data => {
        console.log(data);
        window.location.reload()
      });
  }

  editarEd() {
    this.datosPortfolio.editEdu(this.editarEducacion, this.editarEducacion.id).subscribe(
      data => {
        console.log(data);
        window.location.reload()
      });
  }

  borradoCompleto() {
    this.datosPortfolio.borrarEdu(this.editarEducacion.id).subscribe((data: any) => { window.location.reload() })
  }

}

export interface educacion {
  id: Number;
  titulo: String;
  nivelEducativo: String;
  institucion: String;
}