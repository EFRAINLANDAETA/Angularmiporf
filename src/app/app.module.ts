import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/header/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CabModuloComponent } from './components/cab-modulo/cab-modulo.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HardysoftSkillComponent } from './components/hardysoft-skill/hardysoft-skill.component';
import { ModBarrasComponent } from './components/mod-barras/mod-barras.component';
import { CabBarrasComponent } from './components/cab-barras/cab-barras.component';
import { ModIdiomasComponent } from './components/mod-idiomas/mod-idiomas.component';
import { ModVariableComponent } from './components/mod-variable/mod-variable.component';
import { ModProyectosComponent } from './components/mod-proyectos/mod-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    CabModuloComponent,
    IdiomasComponent,
    ProyectosComponent,
    EstudiosComponent,
    HardysoftSkillComponent,
    ModBarrasComponent,
    CabBarrasComponent,
    ModIdiomasComponent,
    ModVariableComponent,
    ModProyectosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
