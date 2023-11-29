import { render, screen } from '@testing-library/react';
import EventsList from '../components/EventsList';
import '@testing-library/jest-dom';

test('renders EventsList component', () => {
  render(<EventsList handleOpen={() => {}} />);

  const addButton = screen.getByText(/Agregar evento/i);
  expect(addButton).toBeInTheDocument();
});

test('renders list of events when available', () => {
  const events = [
    {
      id: '1',
      name: 'Evento 1',
      dateTime: '2023-01-01',
      description: 'Descripción 1',
    },
  ];

  render(<EventsList handleOpen={() => {}} />);

  events.forEach((event) => {
    const eventName = screen.getByText(event.name);
    const eventDateTime = screen.getByText(event.dateTime);
    const eventDescription = screen.getByText(event.description);

    expect(eventName).toBeInTheDocument();
    expect(eventDateTime).toBeInTheDocument();
    expect(eventDescription).toBeInTheDocument();
  });
});

test('renders "No hay eventos disponibles" message when no events available', () => {
  render(<EventsList handleOpen={() => {}} />);

  const noEventsMessage = screen.getByText(/No hay eventos disponibles/i);
  expect(noEventsMessage).toBeInTheDocument();
});
