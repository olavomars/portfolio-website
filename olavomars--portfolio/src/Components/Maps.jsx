import {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Marker} from 'react-map-gl';

export const Maps = () => {
  const [zoom, setZoom] = useState(13);
  return (
    <div className='maps_container'>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{
          width: '288px',
          height: '388px',
        }}
        initialViewState={{
          longitude: -60.010959,
          latitude: -3.08999,
        }}
        mapStyle='mapbox://styles/olavomars/clijo5kuz00tq01qga28la6g5'
        zoom={zoom}
      ></Map>
    </div>
  );
};
