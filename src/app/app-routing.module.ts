import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';
import { RegistroPageComponent } from './components/registro-page/registro-page.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'registro', component: RegistroPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
