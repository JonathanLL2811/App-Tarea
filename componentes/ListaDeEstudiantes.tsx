import React from 'react';
import useDatosEstudiantes from './DatosEstudiantes';

const ListaDeEstudiantes = () => {
  const estudiantes = useDatosEstudiantes();

  return (
    <ul>
      {estudiantes.map((estudiante) => (
        <li key={estudiante.id}>
          {estudiante.id}. {estudiante.nombre}
        </li>
      ))}
    </ul>
  );
};

export default ListaDeEstudiantes;
