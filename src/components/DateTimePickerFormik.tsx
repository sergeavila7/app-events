// DateTimePickerFormik.tsx
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);

interface DateTimePickerFormikProps {
  onChange: (value: string) => void;
}

const DateTimePickerFormik: React.FC<DateTimePickerFormikProps> = ({
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ maxWidth: '100%' }}>
        {' '}
        <DateTimePicker
          label={'Fecha y hora del evento'}
          disablePast
          onChange={(value: Dayjs | null) => {
            if (value) {
              const formattedDate = value
                .tz(dayjs.tz.guess())
                .format('dddd, YYYY-MM-DD HH:mm');
              onChange(formattedDate);
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateTimePickerFormik;
