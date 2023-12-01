"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import Navbar from "./navbar";
import { WeatherDataContext } from "./weatherdatacontext";

function page() {
  const { zip, setZip, city, setCity, temperature, setTemperature } =
    useContext(WeatherDataContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiKey = "1da84f365d685265a8d7ee95c4f3acca";

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setCity(data.name);
      });
  };

  return (
    <div className="my-5">
      <Navbar />

      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <input
            value={zip}
            type="text"
            onChange={handleChange}
            className="input-field"
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {city && temperature && (
        <div className="my-5">
          <table>
            <thead>
              <tr>
                <th>Zip Code</th>
                <th>City</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{zip}</td>
                <td>{city}</td>
                <td>{temperature}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default page;
