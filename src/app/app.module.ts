import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';

import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistroPageComponent } from './components/registro-page/registro-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DepartamentosDialogComponent } from './components/departamentos-dialog/departamentos-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { OlvidadoPageComponent } from './components/olvidado-page/olvidado-page.component';
import { OlvidadaDialogComponent } from './components/olvidada-dialog/olvidada-dialog.component';
import { BreadcrumbsNavigationComponent } from './components/breadcrumbs-navigation/breadcrumbs-navigation.component';
import { NuevaContrPageComponent } from './components/nueva-contr-page/nueva-contr-page.component';
import { NoticiasPageComponent } from './components/noticias-page/noticias-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { FavoritosPageComponent } from './components/favoritos-page/favoritos-page.component';
import { PerfilPageComponent } from './components/perfil-page/perfil-page.component';
import { FilterPipe } from './pipes/filter.pipe';


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
    FilterPipe
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
