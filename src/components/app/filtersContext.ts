import { createContext } from "react";

export type States =
  | "NSW"
  | "VIC"
  | "QLD"
  | "WA"
  | "SA"
  | "TAS"
  | "ACT"
  | "NT"
  | "";

export const FiltersContext = createContext<{
  state: States;
  setState: (newState: States) => void;
}>({
  state: "",
  setState: () => {},
});
