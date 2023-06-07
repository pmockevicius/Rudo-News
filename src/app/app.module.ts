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


@NgModule({
  declarations: [
    AppComponent,
    InicioPageComponent,
    RegistroPageComponent,
    DepartamentosDialogComponent,
    HeaderComponent,
    OlvidadoPageComponent
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
