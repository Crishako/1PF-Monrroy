import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { FullnamePipe } from './pipes/fullname.pipe';
import { FontSize20Directive } from './directives/font-size-20.directive';
import { PromedioPipe } from './pipes/promedio.pipe';
import { ResaltarAlumnoDirective } from './directives/resaltar-alumno.directive';
import { FormErrorsPipe } from './pipes/form-errors.pipe';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    FullnamePipe,
    FontSize20Directive,
    PromedioPipe,
    ResaltarAlumnoDirective,
    FormErrorsPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule, // Asegúrate de agregar RouterModule aquí
    DashboardRoutingModule,

  ],
  exports: [SidenavComponent,ToolbarComponent,FullnamePipe,FontSize20Directive,PromedioPipe,ResaltarAlumnoDirective,FormErrorsPipe]
})
export class SharedModule { }
