import React from "react";
import Slider from "react-slick";

  const testimonialData = [
    {
      id: 1,
      name: "Amit Sharma",
      text: "Exploring the backwaters of Kerala was an unforgettable experience! The arrangements were seamless, and the hospitality was top-notch.",
      img: "https://picsum.photos/101/101", // Replace with actual Indian-themed image URL if available.
    },
    {
      id: 2,
      name: "Priya Patel",
      text: "Visiting the Taj Mahal at sunrise left me speechless. The attention to detail in planning this trip made it truly special!",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Ravi Iyer",
      text: "The trip to Ladakh was a dream come true! The serene landscapes and the perfectly planned itinerary made the journey magical.",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 4,
      name: "Sonal Gupta",
      text: "Our family vacation to Goa was a delight! From beautiful beaches to authentic seafood, everything was beyond expectations.",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Arjun Verma",
      text: "Exploring the palaces of Rajasthan was like stepping back in time. A wonderfully curated experience by the team!",
      img: "https://picsum.photos/105/105",
    },
  ];
  


const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            
              <h1 className="text-3xl font-bold "> See what our happy travelers are saying!</h1>
            <p className="text-xs text-gray-400">
              {" "}
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
