import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { AlumnoDialogComponent } from '../../components/alumno-dialog/alumno-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [];
  

  constructor(private alumnoService: AlumnoService, private matDialog: MatDialog) {
    this.alumnos = [];
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumnos = data['alumnos'];
    });
  }


openAlumnoDialog(): void {
  const dialogRef = this.matDialog.open(AlumnoDialogComponent);

  dialogRef.afterClosed().subscribe((nuevoAlumno) => {
    if (nuevoAlumno) {
      this.alumnoService.agregarAlumno(nuevoAlumno).subscribe((alumnos) => {
        this.alumnos = alumnos;
      });
    }
  });
}
}
