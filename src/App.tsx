import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import EventsList from './components/EventsList';

function App() {
  const eventsState = useSelector((state) => state);
  console.log(eventsState);
  return (
    <div>
      <EventsList></EventsList>)
    </div>
  );
}

export default App;
