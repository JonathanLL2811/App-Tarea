import { useState, useEffect } from 'react';


interface Estudiante {
  id: string;
  nombre: string;
}

const DatosEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'María' },
    { id: '3', nombre: 'Carlos' },
    { id: '4', nombre: 'Ana' },
    { id: '5', nombre: 'Pedro' },
    { id: '6', nombre: 'Lucía' },
    { id: '7', nombre: 'Sofía' },
    { id: '8', nombre: 'Miguel' },
    { id: '9', nombre: 'Elena' },
    { id: '10', nombre: 'Pablo' }
  ]);

  useEffect(() => {
    const tiempoEspera = setTimeout(() => {
      const nuevosEstudiantes: Estudiante[] = [
        { id: '11', nombre: 'Fernanda' },
        { id: '12', nombre: 'Rodrigo' },
        { id: '13', nombre: 'Valeria' },
        { id: '14', nombre: 'Jorge' },
        { id: '15', nombre: 'Andrea' }
      ];
      setEstudiantes((prevEstudiantes) => [...prevEstudiantes, ...nuevosEstudiantes]);
    }, 5000);

    return () => clearTimeout(tiempoEspera);
  }, []);

  return estudiantes;
};

export default DatosEstudiantes;
