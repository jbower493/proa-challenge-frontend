import { useState } from "react";
import { useWeatherStationsQuery } from "../../utils/queries";
import { Header } from "../header";
import { Map } from "../map";
import { Sidebar } from "../sidebar";
import "./app.css";
import { FiltersContext, type States } from "./filtersContext";

export function App() {
  const [state, setState] = useState<States>("");

  const { data } = useWeatherStationsQuery();

  const markers = (data || []).map(({ latitude, longitude, id }) => ({
    stationId: id,
    lat: latitude,
    lng: longitude,
  }));

  return (
    <FiltersContext.Provider value={{ state, setState }}>
      <div className="app">
        <Header />
        <main className="mainPage">
          <Sidebar />
          <div className="mapContainer">
            <Map markers={markers} />
          </div>
        </main>
      </div>
    </FiltersContext.Provider>
  );
}
