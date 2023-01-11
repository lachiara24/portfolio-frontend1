import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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

const rutas: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent}
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
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
