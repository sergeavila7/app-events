import * as Yup from 'yup'; 

export const eventSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es obligatorio'),
  description: Yup.string().required('Este campo es obligatorio'),
});
