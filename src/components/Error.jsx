import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className=" flex justify-center flex-col">
        <h2 className=" text-3xl m-3 text-center">404 Not Found!</h2>
        <Link
          to={"/"}
          className=" text-center bg-slate-300 px-3 py-2 my-2 rounded-md w-fit m-auto"
        >
          Go Home
        </Link>

        <a
          href={"/"}
          className=" text-center bg-slate-300 px-3 py-2 my-2 rounded-md w-fit m-auto"
        >
          Go Home
        </a>
      </div>
    </>
  );
}
