// import React, { useState } from "react";
// import { WeatherDataContext, WeatherContextType } from "./weatherdatacontext";
// import Navbar from "./navbar";
// import Page from "./page";

// export default function MyApp() {
//   // Declare state variables for weather data
//   const [zip, setZip] = useState<string>("");
//   const [city, setCity] = useState<string | null>(null);
//   const [temperature, setTemperature] = useState<number | null>(null);

//   // The value for the context provider should be an object
//   const providerValue: WeatherContextType = {
//     zip,
//     setZip,
//     city,
//     setCity,
//     temperature,
//     setTemperature,
//   };

//   return (
//     <WeatherDataContext.Provider value={providerValue}>
//       <Navbar />
//       <Page />
//     </WeatherDataContext.Provider>
//   );
// }
