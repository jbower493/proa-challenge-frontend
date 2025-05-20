import { useWeatherStationDetailsWithLatestMeasurementsQuery } from "../../utils/queries";

type Props = {
  id: number;
};

export function StationDetails({ id }: Props) {
  const { data } = useWeatherStationDetailsWithLatestMeasurementsQuery(id);

  console.log(data);

  return <div>StationDetails</div>;
}
