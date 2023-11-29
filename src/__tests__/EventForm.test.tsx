import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider
import { configureStore } from '../app/store'; // Import your Redux store configuration
import eventReducer from '../features/events/eventSlice';
import EventForm from '../components/EventForm';

describe('EventsList', () => {
  // Create a Redux store
  const store = configureStore({
    reducer: {
      events: eventReducer,
    },
  });
  test('Should show the event list component', () => {
    render(
      // Wrap the component in the Provider and pass the store
      <Provider store={store}>
        <EventForm handleClose={() => {}} open={false} />
      </Provider>
    );
    const addButton = screen.queryAllByAltText(/Agregar Evento/i);
    expect(addButton).toBeDefined();
  });
});
