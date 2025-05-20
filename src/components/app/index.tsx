import { useWeatherStationsQuery } from "../../utils/queries";
import { Map } from "../map";

export function App() {
  const { data } = useWeatherStationsQuery();

  const markers = (data || []).map(({ latitude, longitude, id }) => ({
    stationId: id,
    lat: latitude,
    lng: longitude,
  }));

  return (
    <div>
      <Map markers={markers} />
    </div>
  );
}
