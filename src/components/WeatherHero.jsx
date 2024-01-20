import React, { useContext, useEffect } from "react";

import data from "../data/countries.json";
import { useLocationContext } from "../context/LocationContext";

export default function WeatherHero() {
  const {
    country,
    setCountry,
    city,
    setCity,
    cityList,
    setCityList,
    getCityList,
  } = useLocationContext();

  const handleChange = (newCountry) => {
    setCountry(newCountry);
  };

  const handleCity = (newCity) => {
    setCity(newCity);
  };

  console.log(cityList);

  return (
    <div className=" bg-slate-900 text-gray-300">
      {/* Select Country  */}
      <div className=" p-3">
        <select
          name="country"
          id="country"
          onChange={(e) => handleChange(e.target.value)}
          className=" p-2 rounded-md font-medium w-full bg-slate-600 text-gray-300 border-none focus:border-none active:border-none "
        >
          <option defaultValue={"Bangladesh"}>Choose a Country</option>
          {data.map((countryInfo, id) => (
            <option key={id} value={countryInfo.name}>
              {countryInfo.name}
            </option>
          ))}
        </select>
      </div>

      {/* Select City  */}
      <div className=" p-3">
        <select
          name="city"
          id="city"
          onChange={(e) => handleCity(e.target.value)}
          className=" p-2 rounded-md font-medium w-full bg-slate-600 text-gray-300 border-none focus:border-none active:border-none "
        >
          <option defaultValue={"Dhaka"}> Choose a City</option>
          {data.map((countryInfo, id) => (
            <option key={id} value={countryInfo.name}>
              {countryInfo.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-3 flex flex-row">
        <div className=" w-8/12">
          <h2 className=" text-3xl font-semibold">{city}</h2>
          <p className=" text-sm text-gray-400">Chances of Rain : 27%</p>
          <h2 className=" text-5xl mt-10 font-bold">{16}&deg;C</h2>
        </div>
        <div className="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sun_icon.svg/1020px-Sun_icon.svg.png"
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
