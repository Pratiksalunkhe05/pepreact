import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <div
      className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-105"
      onClick={handleOrderPopup}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt="No image"
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="p-4 space-y-3">
        <h1 className="font-bold text-xl text-gray-800">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="text-gray-700 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t-2 py-3 mt-3">
          <div className="text-sm text-gray-600">{type}</div>
          <div>
            <p className="text-2xl font-bold text-gray-800">₹{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
