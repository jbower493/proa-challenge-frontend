import type { WeatherStationDetailsWithLatestMeasurements } from "../../utils/queries";
import "./measurement.css";

type Props =
  WeatherStationDetailsWithLatestMeasurements["latest_measurements"][number];

export function Measurement({ long_name, timestamp, unit, value }: Props) {
  return (
    <div className="measurement">
      <h4>{long_name}</h4>
      <p>
        {value} {unit}
      </p>
      <p>Last measured at: {timestamp}</p>
    </div>
  );
}
