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
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className=" sm:w-3/12 md:w-2/12 xl:w-1/12 m-2 bg-slate-600 rounded-xl p-3 text-gray-300 text-center ">
      <div className=" p-5 mb-10">
        <FontAwesomeIcon className=" text-2xl" icon={faUmbrella} />
      </div>

      <div>
        <Link to={"/"}>
          <SideButton givenIcon={faCloudSunRain} name={"Weather"} />
        </Link>
        <Link to={"/cities"}>
          <SideButton givenIcon={faCity} name={"Cities"} />
        </Link>
        <Link to={"/map"}>
          <SideButton givenIcon={faMap} name={"Map"} />
        </Link>

        <Link to={"/settings"}>
          <SideButton givenIcon={faSliders} name={"Settings"} />
        </Link>
      </div>
    </div>
  );
}
