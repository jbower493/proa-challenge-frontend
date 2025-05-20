import { useQuery } from "@tanstack/react-query";

type WeatherStationsData = {
  id: number;
  ws_name: string;
  site: string;
  portfolio: string;
  state: string;
  latitude: number;
  longitude: number;
}[];

export function useWeatherStationsQuery() {
  return useQuery({
    queryKey: ["weather-stations"],
    queryFn: async () =>
      fetch(`http://localhost:3000/api/weather-stations`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Fetch failed");
          }

          return res.json();
        })
        .then((data) => data.data as WeatherStationsData),
  });
}

type WeatherStationDetailsWithLatestMeasurements = {
  latest_measurements: {
    name: string;
    unit: string;
    long_name: string;
    value: number;
    timestamp: string;
  };
  id: number;
  name: string;
  site: string;
  portfolio: string;
  state: string;
  latitude: number;
  longitude: number;
};

export function useWeatherStationDetailsWithLatestMeasurementsQuery(
  id: number
) {
  return useQuery({
    queryKey: ["weather-stations", id],
    queryFn: async () =>
      fetch(`http://localhost:3000/api/weather-stations/${id}`)
        .then((res) => res.json())
        .then((data) => data as WeatherStationDetailsWithLatestMeasurements),
  });
}
