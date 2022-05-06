import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
form:FormGroup;
oculto : boolean= false;
ocultarLog:boolean=true;
mostrarCierre:boolean = true; 
router: any;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService ,private ruta:Router){ 
    this.form=this.formBuilder.group({
    nombreUsuario:[,[Validators.required, Validators.minLength(9)]],
    password:[,[Validators.required,Validators.minLength(8)]]
    });
    }

    ngOnInit(): void {
    }
  
    mostrar(){
    this.oculto = ! this.oculto
    }

    get User(){
     return this.form.get('nombreUsuario');
    }

    get Password(){
    return this.form.get('password');
   }

    onEnviar(event:Event){
      this.mostrarCierre = !this.mostrarCierre;//cuando se hace el envio aparece donde estaba el inicio en el otro simbolo de cierre
     this.ocultarLog = !this.ocultarLog;//cuando hago el envio de los datos se cierre la ventanita
      event.preventDefault;
      this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
     this.oculto = !this.oculto; //cuando hago click en el boton de user se muestre la ventanita 
    /*   console.log("DATA:" + JSON.stringify(data)); */ //lo oculto para que no muestre mi token en consola
      this.ruta.navigate(['/']);
      })}
    
    offSesion (event:Event){
      this.autenticacionService.cerrarfunciona=true
      event.stopPropagation;
      this.autenticacionService.CerrarSesion
      localStorage.removeItem('currentUser');
      this.autenticacionService.currentUserSubject.next(null);
      console.log("Sesion Terminada");
      window.location.reload()
    }
  }