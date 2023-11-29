import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  Event,
  EventsState,
  addEvent,
  deleteEvent,
} from '../features/events/eventSlice';

export const useEvents = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const events = useSelector((state: EventsState) => state.events);

  const handleChange = (values: Event) => {
    const dateTimeString = values.dateTime.toString();
    dispatch(addEvent({ ...values, id: uuid(), dateTime: dateTimeString }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEvent({ id }));
  };
  const isAvailable = useMemo(() => {
    return events.length > 0;
  }, [events]);

  return {
    open,
    events,
    isAvailable,
    handleDelete,
    handleChange,
    handleOpen,
    handleClose,
  };
};
