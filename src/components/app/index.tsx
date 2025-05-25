import { useState } from "react";
import { useWeatherStationsQuery } from "../../utils/queries";
import { Header } from "../header";
import { Map } from "../map";
import { Sidebar } from "../sidebar";
import "./app.css";
import {
  FiltersContext,
  type States,
  type StatesFilters,
} from "./filtersContext";
import { Button } from "../Button";

export function App() {
  const [isMapUiShowing, setIsMapUiShowing] = useState(true);
  const [states, setStates] = useState<StatesFilters>({
    ACT: true,
    NSW: true,
    NT: true,
    QLD: true,
    SA: true,
    TAS: true,
    VIC: true,
    WA: true,
  });

  function toggleState(state: States) {
    setStates((prev) => ({ ...prev, [state]: !prev[state] }));
  }

  const { data } = useWeatherStationsQuery();

  const markers = (data || []).map(({ latitude, longitude, id, state }) => ({
    stationId: id,
    lat: latitude,
    lng: longitude,
    state,
  }));

  return (
    <FiltersContext.Provider value={{ states, toggleState }}>
      <div className="app">
        <Header />
        <main className="mainPage">
          <Sidebar />
          <div className="mapContainer">
            <div className="mapContainer__top">
              <h1 className="mapContainer__title">
                Weather Stations in Australia
              </h1>
              <Button onClick={() => setIsMapUiShowing((prev) => !prev)}>
                Toggle Map UI
              </Button>
            </div>
            <Map markers={markers} isMapUiShowing={isMapUiShowing} />
          </div>
        </main>
      </div>
    </FiltersContext.Provider>
  );
}
