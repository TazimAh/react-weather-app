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

export default function SideBar() {
  return (
    <>
      <div className=" p-5 mb-10">
        <FontAwesomeIcon className=" text-2xl" icon={faUmbrella} />
      </div>

      <div>
        <SideButton givenIcon={faCloudSunRain} name={"Weather"} />
        <SideButton givenIcon={faCity} name={"Cities"} />
        <SideButton givenIcon={faMap} name={"Map"} />
        <SideButton givenIcon={faSliders} name={"Settings"} />
      </div>
    </>
  );
}
