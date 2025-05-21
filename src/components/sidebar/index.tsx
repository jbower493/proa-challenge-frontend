import { useContext } from "react";
import "./sidebar.css";
import { FiltersContext, type States } from "../app/filtersContext";

export function Sidebar() {
  const { states, toggleState } = useContext(FiltersContext);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Filters</h3>
      <h4>State</h4>
      <div className="sidebar__filter">
        {Object.keys(states).map((state) => {
          const typedState = state as States;

          return (
            <label key={state}>
              <input
                className="sidebar__filterInput"
                type="checkbox"
                name={state}
                checked={states[typedState]}
                onChange={() => toggleState(typedState)}
              />
              {state}
            </label>
          );
        })}
      </div>
    </div>
  );
}
