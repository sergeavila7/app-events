import { useEvents } from './hooks/useEvents';
import Tabs from './components/Tabs';
import EventForm from './components/EventForm';
import EventsList from './components/EventsList';
import GraphComponent from './components/GraphComponent';
import './App.css';

function App() {
  const { handleOpen, handleClose, open } = useEvents();

  const tabs = [
    {
      label: 'Ver lista',
      children: <EventsList handleOpen={handleOpen} />,
    },
    { label: 'Ver gráfica', children: <GraphComponent /> },
  ];

  return (
    <div className='App'>
      <Tabs tabs={tabs} />
      <EventForm open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
