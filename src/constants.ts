import { Event } from './features/events/eventSlice';

export const initialState: Event[] = [
    {
      id: '1',
      name: 'Conferencia de Desarrollo Web',
      dateTime: 'Tuesday, 2023-02-15 14:00',
      description:
        'Una conferencia sobre las últimas tendencias en desarrollo web.',
    },
    {
      id: '2',
      name: 'Lanzamiento de Producto',
      dateTime: 'Friday, 2023-03-10 18:30',
      description: 'Presentación del nuevo producto de la empresa.',
    },
    {
      id: '3',
      name: 'Reunión de Equipo',
      dateTime: 'Monday, 2023-04-05 10:00',
      description:
        'Reunión mensual para discutir el progreso del equipo y nuevos proyectos.',
    },
    {
      id: '4',
      name: 'Reunión de Equipo',
      dateTime: 'Monday, 2023-04-05 10:00',
      description:
        'Reunión mensual para discutir el progreso del equipo y nuevos proyectos.',
    },
  ];