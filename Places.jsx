import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/kedarnath.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/puri.jpg";
import Img4 from "../../assets/places/darj.jpg";
import Img5 from "../../assets/places/manali.jpg";
import Img6 from "../../assets/places/dal.jpg";
import PropTypes from "prop-types";

const PlacesData = [
  {
    img: Img1,
    title: "Kedarnath",
    location: "Uttarakhand",
    description:
      "Kedarnath is a town in the Indian state of Uttarakhand, known for the Kedarnath Temple, one of the holiest Hindu temples dedicated to Lord Shiva. It is located in the Himalayas and is a popular pilgrimage site.",
    price: 7999,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "Agra",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 5999,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Jagannath Puri",
    location: "Odisha",
    description:
      "Jagannath Puri is a coastal town in the state of Odisha, famous for the Jagannath Temple and its annual Rath Yatra. It is one of the Char Dham pilgrimage sites for Hindus.",
    price: 6149,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Darjeeling",
    location: "West Bengal",
    description:
      "Darjeeling is a town in the Indian state of West Bengal, known for its tea industry, scenic views of the Himalayas, and the Darjeeling Himalayan Railway. It is a popular tourist destination.",
    price: 6999,
    type: "Hill Station",
  },
  {
    img: Img5,
    title: "Manali",
    location: "Himachal Pradesh",
    description:
      "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
    price: 6899,
    type: "Hill Station",
  },
  {
    img: Img6,
    title: "Dal Lake",
    location: "Srinagar",
    description:
      "Dal Lake is a picturesque waterbody located in Srinagar, Jammu and Kashmir, renowned for its serene beauty and cultural significance. ",
    price: 6199,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white py-16">
      <section data-aos="fade-up" className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Places;
