import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProyectoItemComponent } from './componentes/proyecto-item/proyecto-item.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EducacionItemComponent } from './componentes/educacion-item/educacion-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { DdMmYYYYDatePipe } from './pipes/dd-mm-yyyy-date.pipe';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { GlobalHttpInterceptorService } from './services/global-http-interceptor.service';
import { UsersService } from './services/users.service';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { interceptorProvider } from './services/interceptor-service';
import { FileUploadComponent } from './componentes/file-upload/file-upload.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { SkillItemComponent } from './componentes/skill-item/skill-item.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';

const rutas: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'register', component: RegisterComponent, pathMatch: "full" },
  { path: 'educacion/:personaId/add', component: AddEducacionComponent},
  { path: 'educacion/:id', component: AddEducacionComponent},
  { path: 'experiencia/:personaId/add', component: AddExperienciaComponent},
  { path: 'experiencia/:id', component: AddExperienciaComponent},
  { path: 'proyecto/:personaId/add', component: AddProyectoComponent},
  { path: 'proyecto/:id', component: AddProyectoComponent},
  { path: 'skill/:personaId/add', component: AddSkillComponent},
  { path: 'skill/:id', component: AddSkillComponent},
  { path: 'perfil/:personaId', component: PerfilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
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
    DdMmYYYYDatePipe,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    FileUploadComponent,
    AboutMeComponent,
    SkillComponent,
    SkillItemComponent,
    AddSkillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
    // [UsersService],
    // { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
