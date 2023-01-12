import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProyectoItemComponent } from './componentes/proyecto-item/proyecto-item.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EducacionItemComponent } from './componentes/educacion-item/educacion-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { EditEducacionComponent } from './componentes/edit-educacion/edit-educacion.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { DdMmYYYYDatePipe } from './pipes/dd-mm-yyyy-date.pipe';


const rutas: Routes = [
  { path: '', component: HomeComponent},
  { path: 'educacion', component: AddEducacionComponent},
  { path: 'educacion/:id', component: AddEducacionComponent},
  { path: 'experiencia', component: AddExperienciaComponent},
  { path: 'experiencia/:id', component: AddExperienciaComponent},
  { path: 'proyecto', component: AddProyectoComponent},
  { path: 'proyecto/:id', component: AddProyectoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    ExperienciaItemComponent,
    EducacionComponent,
    ProyectoItemComponent,
    ProyectoComponent,
    EducacionItemComponent,
    AddEducacionComponent,
    HomeComponent,
    AddExperienciaComponent,
    AddProyectoComponent,
    DdMmYYYYDatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
