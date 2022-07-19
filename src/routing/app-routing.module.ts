import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from 'src/app/components/acerca-de/acerca-de.component';
import { EducacionComponent } from 'src/app/components/educacion/educacion.component';
import { ExperienciaComponent } from 'src/app/components/experiencia/experiencia.component';
import { ProyectosComponent } from 'src/app/components/proyectos/proyectos.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { SoftComponent } from 'src/app/components/soft/soft.component';
import { SGGuard } from 'src/app/guard/sg.guard';

const routes: Routes = [
  { path:'', redirectTo: 'acerca', pathMatch: 'full' },

  { path: 'educacion', component: EducacionComponent, children:[{path:'editarHome',component: EducacionComponent, canLoad:[SGGuard]}]},

  { path:'acerca',component:AcercaDeComponent, children:[{path:'editarHome',component: AcercaDeComponent, canLoad:[SGGuard]}]},
  { path: 'experiencia', component: ExperienciaComponent}, 
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'hard', component: SkillsComponent},
  { path: 'soft', component: SoftComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
