import React from "react";
import WeatherHero from "./WeatherHero";
import DailyForecast from "./DailyForecast";
import AirCondition from "./AirCondition";
import WeeklyForecast from "./WeeklyForecast";

export default function Weather() {
  return (
    <>
      <div className=" flex justify-center">
        <div className=" w-8/12 ">
          <WeatherHero />
          <DailyForecast />
          <AirCondition />
        </div>
        <div className=" w-4/12 ">
          <WeeklyForecast />
        </div>
      </div>
    </>
  );
}
