import { useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { StationDetails } from "../stationDetails";

type MapLocation = {
  lat: number;
  lng: number;
};

type StationMarker = MapLocation & {
  stationId: number;
};

type Props = {
  markers?: StationMarker[];
};

const containerStyle = {
  width: "1000px",
  height: "850px",
};

const center = {
  lat: -28.434214,
  lng: 133.925162,
};

const zoom = 4.8;

export function Map({ markers = [] }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [, setMap] = useState(null);
  const [selectedStation, setSelectedStation] = useState<StationMarker | null>(
    null
  );

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map(({ lat, lng, stationId }, i) => (
        <Marker
          key={i}
          position={{ lat, lng }}
          onClick={() => setSelectedStation({ stationId, lat, lng })}
        />
      ))}

      {selectedStation && (
        <InfoWindow
          position={{ lat: selectedStation.lat, lng: selectedStation.lng }}
          onCloseClick={() => setSelectedStation(null)}
        >
          <StationDetails id={selectedStation.stationId} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
