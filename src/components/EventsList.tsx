import { FC } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { useEvents } from '../hooks/useEvents';
interface EventListProps {
  handleOpen: () => void;
}

const EventsList: FC<EventListProps> = ({ handleOpen }) => {
  const { isAvailable, handleDelete, events } = useEvents();

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: isAvailable ? 'space-between' : 'center',
        }}
      >
        {isAvailable && (
          <Typography variant='h4' gutterBottom>
            Lista de Eventos
          </Typography>
        )}
        <Button
          endIcon={<AddCircleOutlinedIcon />}
          variant='contained'
          size='medium'
          onClick={handleOpen}
        >
          Agregar evento
        </Button>
      </Box>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '20px',
        }}
      >
        {isAvailable ? (
          events.map((event) => (
            <div
              key={event.id}
              style={{ flex: '1 0 300px', maxWidth: '310px' }}
            >
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent>
                  <Typography variant='h6'>{event.name}</Typography>
                  <Typography color='textSecondary'>
                    {event.dateTime}
                  </Typography>
                  <Typography>{event.description}</Typography>
                </CardContent>
                <Box style={{ marginTop: 'auto', paddingBottom: '20px' }}>
                  <Button
                    endIcon={<DeleteIcon />}
                    type='submit'
                    variant='contained'
                    size='medium'
                    color='error'
                    onClick={() => handleDelete(event?.id || '')}
                  >
                    Eliminar evento
                  </Button>
                </Box>
              </Card>
            </div>
          ))
        ) : (
          <Box
            sx={{
              marginTop: '20px',
            }}
          >
            <EventBusyIcon sx={{ fontSize: 48 }} />
            <Typography variant='h5'>No hay eventos disponibles.</Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

export default EventsList;
