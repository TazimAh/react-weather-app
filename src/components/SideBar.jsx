import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faCloudSunRain,
  faMap,
  faSliders,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SideButton from "./SideButton";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className=" sm:w-3/12 md:w-2/12 xl:w-1/12 m-2 bg-slate-600 rounded-xl p-3 text-gray-300 text-center ">
      <div className=" p-5 mb-10">
        <FontAwesomeIcon className=" text-2xl" icon={faUmbrella} />
      </div>

      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "";
          }}
        >
          <SideButton givenIcon={faCloudSunRain} name={"Weather"} />
        </NavLink>
        <NavLink
          to={"/cities"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "";
          }}
        >
          <SideButton givenIcon={faCity} name={"Cities"} />
        </NavLink>
        <NavLink
          to={"/map"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "";
          }}
        >
          <SideButton givenIcon={faMap} name={"Map"} />
        </NavLink>

        <NavLink
          to={"/settings"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "";
          }}
        >
          <SideButton givenIcon={faSliders} name={"Settings"} />
        </NavLink>
      </div>
    </div>
  );
}
