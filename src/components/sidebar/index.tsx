import { useContext } from "react";
import "./sidebar.css";
import { FiltersContext, type States } from "../app/filtersContext";

export function Sidebar() {
  const { state, setState } = useContext(FiltersContext);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Filters</h3>
      <label>State</label>
      <select
        value={state}
        onChange={(e) => setState(e.target.value as States)}
      >
        <option value="">Please Select</option>
        <option value="NSW">New South Wales</option>
        <option value="VIC">Victoria</option>
        <option value="QLD">Queensland</option>
        <option value="WA">Western Australia</option>
        <option value="SA">South Australia</option>
        <option value="TAS">Tasmania</option>
        <option value="ACT">Australian Capital Territory</option>
        <option value="NT">Northern Territory</option>
      </select>
    </div>
  );
}
