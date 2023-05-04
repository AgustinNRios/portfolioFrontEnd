import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { EditAndNewComponent } from './components/edit-and-new/edit-and-new.component';
import { NewComponent } from './components/new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,

    AcercaDeComponent,
    EducacionComponent,
    ProyectosComponent,
    ExperienciaComponent,
    HardAndSoftSkillsComponent,

    LoginComponent,

    EditAndNewComponent,
    NewComponent
  ],
  imports: [
    FormsModule,//agregado cx
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
