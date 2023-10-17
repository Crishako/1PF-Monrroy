import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { HttpClient } from '@angular/common/http';
import { Observable,map,switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  obtenerAlumnos(): Observable<any> {
    return this.http.get<any>("../../../assets/data/alumnos.json");
  }

  agregarAlumno(nuevoAlumno: Alumno): Observable<Alumno[]> {
    return this.obtenerAlumnos().pipe(
      map((alumnos) => {
        alumnos.push(nuevoAlumno);
        return alumnos;
      })
    );
  }

  
}
