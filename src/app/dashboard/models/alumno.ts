export interface Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    curso: string;
    calificaciones: {
      matematicas: number;
      historia: number;
      ciencias: number;
    };
    genero: string;
  }