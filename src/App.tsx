import { useState } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventsList from './components/EventsList';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='App'>
      <EventsList handleOpen={handleOpen} />
      <EventForm open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
