import { createContext } from "react";

export interface WeatherContextType {
  zip: string;
  setZip: (zip: string) => void;
  city: string | null;
  setCity: (city: string | null) => void;
  temperature: number | null;
  setTemperature: (temperature: number | null) => void;
}

export const WeatherDataContext = createContext<WeatherContextType | null>(
  null
);
