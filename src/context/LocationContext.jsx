import React, { useContext, useState } from "react";

const LocationContext = React.createContext();

export const LocationProvider = ({ children }) => {
  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState("Bhola");
  const [cityList, setCityList] = useState([]);

  const getCityList = async () => {
    const URL = "https://countriesnow.space/api/v0.1/countries/cities";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        country: country,
      },
    };
    await fetch(URL, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCityList(data);
      });
  };

  return (
    <LocationContext.Provider
      value={{ country, setCountry, city, setCity, cityList, setCityList }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
