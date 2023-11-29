import Plot from 'react-plotly.js';
import { useEvents } from '../hooks/useEvents';
import dayjs from 'dayjs';

const GraphComponent = () => {
  const { events } = useEvents();

  const months = events.map((event) => dayjs(event.dateTime).format('MMMM'));

  const monthCounts = months.reduce((acc, month) => {
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(monthCounts);
  const labels = Object.keys(monthCounts);

  return (
    <div>
      <Plot
        data={[{ values, labels, type: 'pie' }]}
        layout={{ width: 500, height: 500, title: 'Eventos por Mes' }}
      />
    </div>
  );
};

export default GraphComponent;
