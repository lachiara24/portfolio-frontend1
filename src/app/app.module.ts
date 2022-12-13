import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EducacionItemComponent } from './componentes/educacion-item/educacion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    ExperienciaItemComponent,
    EducacionComponent,
    EducacionItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
