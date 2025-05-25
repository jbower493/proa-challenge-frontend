import type { WeatherStationDetailsWithLatestMeasurements } from "../../../utils/queries";
import "./measurement.css";

type Props =
  WeatherStationDetailsWithLatestMeasurements["latest_measurements"][number];

export function Measurement({ long_name, timestamp, unit, value }: Props) {
  return (
    <div className="measurement">
      <h4 className="measurement__name">{long_name}</h4>
      <p>
        <span className="measurement__value">{value}</span> {unit}
      </p>
      <p className="measurement__timestamp">{timestamp}</p>
    </div>
  );
}
