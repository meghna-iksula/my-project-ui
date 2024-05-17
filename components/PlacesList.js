import React from "react";
import Places from "./Places";
import Slider from "./Slider";

const PlacesList = ({ places }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-900 to-blue-800">
        <Slider places={places} />
        <Places places={places} />
      </div>
    </div>
  );
};

export default PlacesList;
