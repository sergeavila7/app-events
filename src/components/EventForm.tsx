import { FC } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Fade, Modal, Backdrop, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputFormik from './InputFormik';
import { TextAreaFormik } from './TextAreaFormik';
import { eventSchema } from '../schemas/eventSchema';
import DateTimePickerFormik from './DateTimePickerFormik';
import { useEvents } from '../hooks/useEvents';
import { Event } from '../features/events/eventSlice';
interface EventFormProps {
  open: boolean;
  handleClose: () => void;
}

const EventForm: FC<EventFormProps> = ({ open, handleClose }) => {
  const { handleChange, isSmallScreen } = useEvents();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen ? '100%' : 400,
    maxWidth: isSmallScreen ? 320 : '100%', // Establecer maxWidth a 320 cuando la pantalla es pequeña
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant='h5' mb={2} color='primary'>
            Formulario evento
          </Typography>
          <Formik
            initialValues={{ name: '', description: '', dateTime: '' }}
            validationSchema={eventSchema}
            onSubmit={(values: Event) => {
              handleChange(values);
              handleClose();
            }}
          >
            {({ isValid, dirty, values, setFieldValue }) => (
              <Form>
                <Box mb={2}>
                  <InputFormik
                    name='name'
                    label='Nombre del evento'
                    type='text'
                  />
                </Box>
                <Box mb={2}>
                  <DateTimePickerFormik
                    onChange={(value) => {
                      setFieldValue('dateTime', value); // Almacenar la fecha y hora completa
                    }}
                  />
                </Box>
                <Box mb={2}>
                  <TextAreaFormik
                    className='w-full'
                    name='description'
                    label='Descripcion'
                    rows={5}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    endIcon={<SendIcon />}
                    type='submit'
                    variant='contained'
                    size='medium'
                    color='success'
                    disabled={!dirty || !isValid || !values.dateTime}
                  >
                    Agregar evento
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EventForm;
