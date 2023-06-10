import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './components/pages-components/inicio-page/inicio-page.component';
import { RegistroPageComponent } from './components/pages-components/registro-page/registro-page.component';
import { OlvidadoPageComponent } from './components/pages-components/olvidado-page/olvidado-page.component';
import { NuevaContrPageComponent } from './components/pages-components/nueva-contr-page/nueva-contr-page.component';
import { NoticiasPageComponent } from './components/pages-components/noticias-page/noticias-page.component';
import { PerfilPageComponent } from './components/pages-components/perfil-page/perfil-page.component';
import { FavoritosPageComponent } from './components/pages-components/favoritos-page/favoritos-page.component';
import { NoticiaComponent } from './components/pages-components/noticias-page/noticia/noticia.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'registro', component: RegistroPageComponent },
  { path: 'olvidado', component: OlvidadoPageComponent },
  { path: 'nueva', component: NuevaContrPageComponent },
  { path: 'noticias', component: NoticiasPageComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'perfil', component: PerfilPageComponent },
  { path: 'favoritos', component: FavoritosPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
