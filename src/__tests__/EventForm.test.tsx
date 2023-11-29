import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventForm from '../components/EventForm';

test('renders EventForm component', () => {
  render(<EventForm open={true} handleClose={() => {}} />);

  const addButton = screen.getByText(/Agregar Evento/i);
  expect(addButton).toBeInTheDocument();
});

test('submits form with valid data', async () => {
  const mockHandleChange = jest.fn();
  render(<EventForm open={true} handleClose={() => {}} />);


  userEvent.type(
    screen.getByLabelText(/Nombre del evento/i),
    'Evento de Prueba'
  );
  userEvent.click(screen.getByText(/Agregar evento/i));

  await waitFor(() => {
    expect(mockHandleChange).toHaveBeenCalledWith({
      name: 'Evento de Prueba',
      description: '',
      dateTime: expect.any(String), 
    });
  });
});

test('disables submit button with invalid data', () => {
  render(<EventForm open={true} handleClose={() => {}} />);

  userEvent.click(screen.getByText(/Agregar evento/i));

  const submitButton = screen.getByText(/Agregar evento/i).closest('button');
  expect(submitButton).toBeDisabled();
});

