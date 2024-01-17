import React, { useContext, useState } from "react";

const LocationContext = React.createContext();

export const LocationProvider = ({ children }) => {
  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState("Bhola");

  const getCountryList = async () => {
    const URL = "https://restcountries.com/v3.1/all?fields=name";
    const data = await fetch(URL).then(() => {});
  };

  return (
    <LocationContext.Provider value={(country, setCountry, city, setCity)}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
