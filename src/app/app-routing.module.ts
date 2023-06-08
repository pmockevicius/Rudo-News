import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';
import { RegistroPageComponent } from './components/registro-page/registro-page.component';
import { OlvidadoPageComponent } from './components/olvidado-page/olvidado-page.component';
import { NuevaContrPageComponent } from './components/nueva-contr-page/nueva-contr-page.component';
import { NoticiasPageComponent } from './components/noticias-page/noticias-page.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'registro', component: RegistroPageComponent },
  { path: 'olvidado', component: OlvidadoPageComponent },
  { path: 'nueva', component: NuevaContrPageComponent },
  { path: 'noticias', component: NoticiasPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
