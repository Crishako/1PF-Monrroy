import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   children: [
  //     { path: '', component: HomeComponent },
  //     { path: 'alumnos', component: AlumnosComponent },
  //     // Agrega más rutas para otras páginas del dashboard
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
