import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styleUrls: ['./alumno-dialog.component.scss']
})
export class AlumnoDialogComponent {
  alumnoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnoDialogComponent>,
    private alumnosService: AlumnoService,

    // RECIBO LA DATA
    @Inject(MAT_DIALOG_DATA) public alumno?: Alumno
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', [Validators.required]],
    });

    if (this.alumno) {
      this.alumnoForm.patchValue(this.alumno);
    }
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const nuevoAlumno = this.alumnoForm.value;
      this.matDialogRef.close(nuevoAlumno);
    }
  }
}
