import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioPageComponent } from './components/pages-components/inicio-page/inicio-page.component';

import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistroPageComponent } from './components/pages-components/registro-page/registro-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DepartamentosDialogComponent } from './components/pages-components/registro-page/departamentos-dialog/departamentos-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared-components/header/header.component';
import { OlvidadoPageComponent } from './components/pages-components/olvidado-page/olvidado-page.component';
import { OlvidadaDialogComponent } from './components/shared-components/message-dialog/olvidada-dialog.component';
import { BreadcrumbsNavigationComponent } from './components/shared-components/breadcrumbs-navigation/breadcrumbs-navigation.component';
import { NuevaContrPageComponent } from './components/pages-components/nueva-contr-page/nueva-contr-page.component';
import { NoticiasPageComponent } from './components/pages-components/noticias-page/noticias-page.component';
import { SearchbarComponent } from './components/shared-components/searchbar/searchbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { FavoritosPageComponent } from './components/pages-components/favoritos-page/favoritos-page.component';
import { PerfilPageComponent } from './components/pages-components/perfil-page/perfil-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NoticiaComponent } from './components/pages-components/noticias-page/noticia/noticia.component';
import { NoticiaCardComponent } from './components/shared-components/noticia-card/noticia-card.component';
import { PrefilButtonComponent } from './components/shared-components/prefil-button/prefil-button.component';
import { EditarPerfilComponent } from './components/pages-components/editar-perfil/editar-perfil.component';
import { FAQComponent } from './components/pages-components/faq/faq.component';
import { TerminosCondicionesComponent } from './components/pages-components/terminos-condiciones/terminos-condiciones.component';
import { PoliticasPrivacidadComponent } from './components/pages-components/politicas-privacidad/politicas-privacidad.component';
import { FAQTermsPoliticasComponent } from './components/shared-components/faq-terms-politicas/faq-terms-politicas.component';
import { BackTitleForPerfilComponent } from './components/shared-components/back-title-for-perfil/back-title-for-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioPageComponent,
    RegistroPageComponent,
    DepartamentosDialogComponent,
    HeaderComponent,
    OlvidadoPageComponent,
    OlvidadaDialogComponent,
    BreadcrumbsNavigationComponent,
    NuevaContrPageComponent,
    NoticiasPageComponent,
    SearchbarComponent,
    SearchPipe,
    FavoritosPageComponent,
    PerfilPageComponent,
    FilterPipe,
    NoticiaComponent,
    NoticiaCardComponent,
    PrefilButtonComponent,
    EditarPerfilComponent,
    FAQComponent,
    TerminosCondicionesComponent,
    PoliticasPrivacidadComponent,
    FAQTermsPoliticasComponent,
    BackTitleForPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
