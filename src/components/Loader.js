import React from "react";
import loader from "../spinner.gif";

export default function Loader() {
  return (
    <div className="text-center">
      <img src={loader} alt="loader" />
    </div>
  );
}
