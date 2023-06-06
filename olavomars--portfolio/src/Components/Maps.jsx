import {useMemo} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';

const Home = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyDoPKVaPltAL8-wGr-OPf1aF40TO1mVZoM',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(() => ({lat: 44, lng: -80}), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Home;
