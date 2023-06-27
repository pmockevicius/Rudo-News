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
import { DepartamentosDialogComponent } from './components/shared-components/departamentos-dialog/departamentos-dialog.component';
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
import { DepartamentosDialogButtonComponent } from './components/shared-components/white-button-w-arrow-forward/white-button-w-arrow-forward';
import { InputWFloatingLabelComponent } from './components/shared-components/input-w-floating-label/input-w-floating-label.component';
import { SimpleFusiaButtonComponent } from './components/shared-components/simple-fusia-button/simple-fusia-button.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContrasenaInputWEyeComponent } from './components/shared-components/contrasena-input-w-eye/contrasena-input-w-eye.component';
import { ButtonTransparentComponent } from './components/shared-components/button-transparent/button-transparent.component';
import { CommentComponent } from './components/shared-components/comment/comment.component';
import { EscribeCommentInputComponent } from './components/shared-components/escribe-comment-input/escribe-comment-input.component';
import { HttpAuthInterceptor } from './interceptors/http.auth.interceptor';
import { HttpErrorInterceptor } from './interceptors/error.auth.interceptor';


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
    BackTitleForPerfilComponent,
    DepartamentosDialogButtonComponent,
    InputWFloatingLabelComponent,
    SimpleFusiaButtonComponent,
    ContrasenaInputWEyeComponent,
    ButtonTransparentComponent,
    CommentComponent,
    EscribeCommentInputComponent,
   
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
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase),   
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true,  },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true,  },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
