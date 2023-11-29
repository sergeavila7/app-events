import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { Room } from '@mui/icons-material';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2VyZ2U3IiwiYSI6ImNscGpjZHM5cDA3YWwyanFodXU4NHhheTgifQ.GrHAmfwixdb6Uak0BXZVsg';

const MapComponent = () => {
  const [viewPort] = useState({
    latitude: 19.428184147493802,
    longitude: -99.16764763396627,
    zoom: 15,
  });

  return (
    <div style={{ width: '100vw', height: '20vh', zIndex: 999 }}>
      <ReactMapGl
        {...viewPort}
        mapboxAccessToken={mapboxgl.accessToken}
        mapStyle='mapbox://styles/mapbox/streets-v12'
      >
        <Marker latitude={19.428184147493802} longitude={-99.16764763396627}>
          <Room
            style={{
              fontSize: 20,
              color: 'tomato',
              cursor: 'pointer',
            }}
          />
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default MapComponent;
