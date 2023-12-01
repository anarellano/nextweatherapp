import { createContext, useState, Dispatch, SetStateAction } from "react";
import Navbar from "./navbar";
import Pages from "./page";

export interface WeatherContextType {
  zip: string;
  setZip: (zip: any) => void;
  city: string | null; // value can either be of type City or null.
  setCity: (city: any) => void;
  temperature: number | null; //set the data type of the hook
  setTemperature: (temperature: any) => void; //sets what data type temprature is and the void is to show you that it doesnt return anything
}

export const WeatherDataContext = createContext<WeatherContextType | null>(
  null
);

export const WeatherDataProvider = () => {
  const [zip, setZip] = useState("");
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);

  return (
    <WeatherDataContext.Provider
      value={{ zip, setZip, city, setCity, temperature, setTemperature }}
    >
      <Navbar />
      <Pages />
    </WeatherDataContext.Provider>
  );
};
