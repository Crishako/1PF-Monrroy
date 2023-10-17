import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AlumnosComponent,
    AlumnosTableComponent,
    AlumnoDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule


  

  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
