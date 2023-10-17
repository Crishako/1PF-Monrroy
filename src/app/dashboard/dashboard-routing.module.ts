import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'dashboard',
      children: [
        { path: '', component: HomeComponent },
        { path: 'alumnos', component: AlumnosComponent },
        // Agrega más rutas para otras páginas del dashboard
      ]
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
