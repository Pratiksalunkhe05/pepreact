import { useState } from "react";

 const Hero = () => {
  const [priceValue, setPriceValue] = useState(4000);
  const [destination, setDestination] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // List of available destinations (you can dynamically fetch these from an API if needed)
  const availableDestinations = [
    "Dubai",
    "Kedarnath",
    "Manali",
    "Taj Mahal",
    "Darjeeling",
    "Srinagar",
    "Paris",
    "New York",
    "London",
  ];

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    setIsDropdownVisible(e.target.value.length > 0); // Show dropdown when there's input
  };

  const handleDestinationSelect = (destination) => {
    setDestination(destination);
    setIsDropdownVisible(false); // Hide the dropdown after selecting
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p data-aos="fade-up" data-aos-delay="300" className="font-bold text-3xl">
              Search Your Destination
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  value={destination}
                  onChange={handleDestinationChange}
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />

                {/* Dropdown for destinations */}
                {isDropdownVisible && (
                  <ul className="absolute left-0 w-full bg-white shadow-lg max-h-60 overflow-y-auto mt-2 rounded-lg z-10">
                    {availableDestinations
                      .filter((place) =>
                        place.toLowerCase().includes(destination.toLowerCase())
                      )
                      .map((place, index) => (
                        <li
                          key={index}
                          onClick={() => handleDestinationSelect(place)}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {place}
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>

              <div>
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">₹ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="4000"
                    max="10000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;