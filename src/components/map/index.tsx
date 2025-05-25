import { useContext, useState } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps";
import { StationDetails } from "../stationDetails";
import { FiltersContext, type States } from "../app/filtersContext";

type MapLocation = {
  lat: number;
  lng: number;
};

type StationMarker = MapLocation & {
  stationId: number;
  state: States;
};

const center = {
  lat: -28.434214,
  lng: 133.925162,
};

const zoom = 4.6;

type Props = {
  markers?: StationMarker[];
  isMapUiShowing: boolean;
};

export function Map({ markers = [], isMapUiShowing }: Props) {
  const { states } = useContext(FiltersContext);

  const [selectedStation, setSelectedStation] = useState<StationMarker | null>(
    null
  );

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        style={{
          width: "800px",
          height: "650px",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={!isMapUiShowing}
      >
        {markers
          .filter((marker) => states[marker.state])
          .map(({ lat, lng, stationId, state }) => {
            return (
              <Marker
                key={stationId}
                position={{ lat, lng }}
                onClick={() =>
                  setSelectedStation({ stationId, lat, lng, state })
                }
              />
            );
          })}

        {selectedStation && (
          <InfoWindow
            position={{ lat: selectedStation.lat, lng: selectedStation.lng }}
            onCloseClick={() => setSelectedStation(null)}
          >
            <StationDetails id={selectedStation.stationId} />
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}
