import { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

export const Maps = (height) => {
  const [zoom, setZoom] = useState(13);

  console.log(height);
  return (
    <div className='maps_container'>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -60.010959,
          latitude: -3.08999,
        }}
        mapStyle='mapbox://styles/olavomars/clit7b87g01uv01qg8fpdd8np'
        zoom={zoom}
      >
        <Marker longitude={-60.010959} latitude={-3.08999}>
          <img
            src='/Assets/memoji.png'
            style={{ width: '90px', height: '90px' }}
          />
        </Marker>
      </Map>
    </div>
  );
};
