import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { LoginComponent } from './components/login/login.component';
import { EditAndNewComponent } from './components/edit-and-new/edit-and-new.component';
import { NewComponent } from './components/new/new.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AcercaDe',
    pathMatch: 'full'
  },
  {
    path: 'AcercaDe',
    component: AcercaDeComponent
  },
  {
    path: 'Educacion',
    component: EducacionComponent
  },
  {
    path: 'Proyectos',
    component: ProyectosComponent
  },
  {
    path: 'Experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'HardAndSoftSkills',
    component: HardAndSoftSkillsComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'EditAndNew/:area/:id',
    component: EditAndNewComponent, ...canActivate(()=>redirectUnauthorizedTo(['/Login']))
  },
  {
    path: 'New/:area',
    component: NewComponent, ...canActivate(()=>redirectUnauthorizedTo(['/Login']))
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
