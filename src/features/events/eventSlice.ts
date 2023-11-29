import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../constants';

export interface Event {
  id?: string;
  name: string;
  dateTime: string;
  description: string;
}
interface DeleteEventPayload {
  id: string;
}
export interface EventsState {
  events: Event[];
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<DeleteEventPayload>) => {
      const { id } = action.payload;
      return state.filter((event) => event.id !== id);
    },
  },
});

export const { addEvent,deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
