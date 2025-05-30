import { useWeatherStationDetailsWithLatestMeasurementsQuery } from "../../utils/queries";
import { Measurement } from "./measurement";
import "./stationDetails.css";

type Props = {
  id: number;
};

export function StationDetails({ id }: Props) {
  const { data, isLoading, isError } =
    useWeatherStationDetailsWithLatestMeasurementsQuery(id);

  if (isError) {
    return <p>Failed to load station details</p>;
  }

  if (isLoading) {
    return <p>Getting station details...</p>;
  }

  const { name, site, portfolio, latest_measurements = [] } = data || {};

  return (
    <div className="stationDetails">
      <h2>{name}</h2>
      <p className="stationDetails__name">
        <span className="stationDetails__meta">Site:</span> {site}
      </p>
      <p>
        <span className="stationDetails__meta">Portfolio:</span> {portfolio}
      </p>
      <h3 className="stationDetails__latestMeasurementsTitle">
        Latest Measurements
      </h3>
      {latest_measurements.length > 0 ? (
        latest_measurements.map((measurement) => (
          <Measurement key={`${id}_${measurement.name}`} {...measurement} />
        ))
      ) : (
        <p className="stationDetails__noMeasurements">
          No measurements recorded
        </p>
      )}
    </div>
  );
}
