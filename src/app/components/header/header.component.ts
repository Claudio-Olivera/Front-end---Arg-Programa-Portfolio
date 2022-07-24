import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SGGuard } from 'src/app/guard/sg.guard';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HeaderServiceService } from 'src/app/servicios/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;
  miPortfolio: any = [];
  mensajeDeError: String = "";
  mensajeDeEnvio: String = "";
  noTieneContenido: boolean = false;

  oculto: boolean = false;

  editarAcerca: Acercade = { nombres: ' ', apellidos: ' ', ocupacion: ' ', sobremi: ' ', email: ' ', fechaNacimiento: ' ', imgPerfil: ' ', imgRepresentativa: ' ' };

  guard = this.SGguard



  @ViewChild('img1', { static: true }) imgRepresent!: ElementRef<HTMLDivElement>; //para la imagen representativa.

  constructor(private formBuilder: FormBuilder, private datosPortfolio: HeaderServiceService, private SGguard: SGGuard, private auth: AutenticacionService) {
    this.form = this.formBuilder.group({
      nombreUsuario: [, [Validators.required, Validators.minLength(9)]],
      password: [, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data: any[]) => {
      this.miPortfolio = data[0]
    })
  }


  ngAfterViewChecked() {
    this.imgRepresent.nativeElement.style.background = "url(" + this.miPortfolio.imgRepresentativa + ")"
    this.imgRepresent.nativeElement.style.backgroundAttachment = "fixed"
    this.imgRepresent.nativeElement.style.backgroundSize = "cover"
    this.imgRepresent.nativeElement.style.width = "auto"
    this.imgRepresent.nativeElement.style.height = "fit-content"
  }  //este ngAfterViewChecked referido a la imagenen representativa. 


  editarImgPerf() {
    if (this.editarAcerca.imgPerfil == " ") {
      this.mensajeDeError = "Es obligatorio enviar una imagen";
      this.noTieneContenido = true
    }
    else {
      this.datosPortfolio.editImgPerfil(this.editarAcerca).subscribe((data: any) => {
        this.mensajeDeEnvio = "La imagen fue enviada correctamente";
        this.noTieneContenido = false
        window.location.reload()
      })
    }
  }

  editarImgRepresentativa() {
    if (this.editarAcerca.imgRepresentativa == " ") {
      this.mensajeDeError = "Es obligatorio enviar una imagen";
      this.noTieneContenido = true
    }
    else {
      this.datosPortfolio.editImgRepresentativa(this.editarAcerca).subscribe((data: any) => {
        this.mensajeDeEnvio = "La imagen fue enviada correctamente";
        this.noTieneContenido = false
        window.location.reload()
      })
    }
  }

  onFileChanged(e: any) {
    this.editarAcerca.imgPerfil = e[0].base64
    this.editarAcerca.imgRepresentativa = e[0].base64
  } //se me ocurrió usar alifeTobase64 para poder convertir mis imagenes a base64 y luego enviar el string a mi db. fuente: https://www.youtube.com/watch?v=3Jlv1QNpQIA -->

  mostrar(): void {
    this.oculto = !this.oculto
  }

  get User() {
    return this.form.get('nombreUsuario');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    this.auth.IniciarSesion(this.form.value || this.auth.currentUserSubject.value).subscribe(data => {
      /*   console.log("DATA:" + JSON.stringify(data)); */
      /* console.log(JSON.stringify (this.auth.currentUserSubject.value)) */
      window.location.reload()
    })
  }

  offSesion(event: Event) {
    event.stopPropagation;
    this.auth.CerrarSesion
    localStorage.removeItem('currentUser');
    this.auth.currentUserSubject.next(null);
    console.log("Sesion Terminada");
    window.location.reload()
  }
}
export interface Acercade {
  nombres: string;
  apellidos: string;
  ocupacion: string;
  sobremi: string;
  email: string;
  fechaNacimiento: string;
  imgPerfil: string;
  imgRepresentativa: string;
}


