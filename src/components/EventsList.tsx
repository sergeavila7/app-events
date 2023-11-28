import { useSelector } from 'react-redux';
import { EventsState } from '../features/events/eventSlice';

const EventsList = () => {
  // Utiliza RootState para tipar el estado
  const stateEvents = useSelector((state: EventsState) => state.events);
  console.log(stateEvents);
  return <div></div>;
};

export default EventsList;
