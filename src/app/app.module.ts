import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AutenticacionService} from './servicios/autenticacion.service';
import { InterceptorService } from './servicios/interceptor.service';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoftComponent } from './components/soft/soft.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    SoftComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module,
    NgbModule,
    NgxSpinnerModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [AutenticacionService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
