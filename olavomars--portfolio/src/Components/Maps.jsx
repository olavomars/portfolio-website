import { useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import { ThemeContext } from '../Contexts/theme-context';

export const Maps = (height) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='maps_container'>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -60.010959,
          latitude: -3.09399,
          zoom: 13,
        }}
        style={{
          height: '320px',
        }}
        mapStyle={
          theme == 'light'
            ? 'mapbox://styles/olavomars/clit7b87g01uv01qg8fpdd8np'
            : 'mapbox://styles/olavomars/cljp2h5b200to01qm6ng6b3no'
        }
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
