import { createContext } from "react";

export type States = "NSW" | "VIC" | "QLD" | "WA" | "SA" | "TAS" | "ACT" | "NT";

export type StatesFilters = Record<States, boolean>;

export const FiltersContext = createContext<{
  states: StatesFilters;
  toggleState: (state: States) => void;
}>({
  states: {
    ACT: false,
    NSW: false,
    NT: false,
    QLD: false,
    SA: false,
    TAS: false,
    VIC: false,
    WA: false,
  },
  toggleState: () => {},
});
