import { createSlice } from '@reduxjs/toolkit';

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [
    { id: 1, name: '1', date: '1', time: '', description: '' },
    { id: 2, name: '1', date: '1', time: '', description: '' },
  ],
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // Aquí puedes agregar tus acciones si las necesitas en el futuro
  },
});

// Exporta el reducer y las acciones si las necesitas
// export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
