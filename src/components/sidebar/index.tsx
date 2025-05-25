import { useContext, useState } from "react";
import "./sidebar.css";
import { FiltersContext, type States } from "../app/filtersContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function Sidebar() {
  const { states, toggleState } = useContext(FiltersContext);
  const [isStatesFilterOpen, setIsStatesFilterOpen] = useState(true);

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Filters</h2>
      <div
        className={`sidebar__filter${
          isStatesFilterOpen ? " sidebar__filter--open" : ""
        }`}
      >
        <div className="sidebar__filterTitleContainer">
          <h3 className="sidebar__filterTitle">State</h3>
          <button
            className="sidebar__filterToggle"
            onClick={() => setIsStatesFilterOpen((prev) => !prev)}
          >
            <ChevronDownIcon
              width={12}
              className="sidebar__filterToggleIcon"
              strokeWidth={3}
            />
          </button>
        </div>
        <div className="sidebar__filterOptions">
          {Object.keys(states).map((state) => {
            const typedState = state as States;

            return (
              <label className="sidebar__filterLabel" key={state}>
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
    </div>
  );
}
