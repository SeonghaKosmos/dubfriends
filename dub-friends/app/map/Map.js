"use client"
import { useMemo } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


const API_KEY = 'AIzaSyBBt_wEw_2QFiDgwh-nzKbPSGPiodUwATQ'


function Map() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const center = useMemo(() => ({ lat: 47.6546, lng: -122.3075}), []);




  const mapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: true,
    fullscreenControl: false
  }

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          options={mapOptions}
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        />
      )}
    </div>
  );
}

export default Map;
