import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SideButton({ givenIcon, name }) {
  return (
    <div className=" mb-8 cursor-pointer hover:text-white">
      <FontAwesomeIcon icon={givenIcon} />
      <h3 className=" text-base">{name}</h3>
    </div>
  );
}
