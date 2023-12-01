import React, { useState } from "react";
import { WeatherDataContext } from "./weatherdatacontext";
import Navbar from "./navbar";
import Page from "./page";

export interface WeatherContextType {
  zip: string;
  setZip: (zip: any) => void;
  city: string | null; // value can either be of type City or null.
  setCity: (city: any) => void;
  temperature: number | null; //set the data type of the hook
  setTemperature: (temperature: any) => void; //sets what data type temprature is and the void is to show you that it doesnt return anything
}

export default function MyApp() {
  const [zip, setZip] = useState("");
  const [city, setCity] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);

  return (
    <WeatherDataContext.Provider
      value={{ zip, setZip, city, setCity, temperature, setTemperature }}
    >
      <Page />
      <Navbar />
    </WeatherDataContext.Provider>
  );
}
