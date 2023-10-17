import { Component, Input } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent {
  @Input()
  dataSource: Alumno[] = [];

  displayedColumns: string[] = ['nombreCompleto', 'edad', 'curso', 'promedio' ];

}
