import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '../app/store';
import EventsList from '../components/EventsList';
import eventReducer from '../features/events/eventSlice';

describe('EventsList', () => {
  const store = configureStore({
    reducer: {
      events: eventReducer,
    },
  });
  test('Should show the event list component', () => {
    render(
      <Provider store={store}>
        <EventsList handleOpen={() => {}} />
      </Provider>
    );

    const title = screen.getByText(/Lista de eventos/i);
    expect(title).toBeDefined();
    const addButton = screen.getByText(/Agregar evento/i);
    expect(addButton).toBeDefined();
  });

  test('Renders list of events when available', () => {
    const events = [
      {
        id: '1',
        name: 'Conferencia de Desarrollo Web',
        dateTime: 'Tuesday, 2023-02-15 14:00',
        description:
          'Una conferencia sobre las últimas tendencias en desarrollo web.',
      },
    ];

    render(
      <Provider store={store}>
        <EventsList handleOpen={() => {}} />
      </Provider>
    );
    events.forEach((event) => {
      const eventName = screen.queryAllByAltText(event.name);
      const eventDateTime = screen.queryAllByAltText(event.dateTime);
      const eventDescription = screen.queryAllByAltText(event.description);

      expect(eventName).toBeDefined();
      expect(eventDateTime).toBeDefined();
      expect(eventDescription).toBeDefined();
    });
  });
});
