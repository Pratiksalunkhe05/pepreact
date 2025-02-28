import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/kedarnath.jpg";
import Img3 from "../../assets/places/puri.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India: Taj Mahal",
    description:
      "The Taj Mahal, one of the most iconic structures in the world, is a symbol of eternal love and architectural brilliance. Located in Agra, India, this majestic white marble mausoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Visitors from all around the world flock to witness its grandeur, which is often referred to as the 'Crown of Palaces.' Its stunning symmetry, intricate carvings, and reflecting pool make it an awe-inspiring masterpiece.",
    extendedDescription:
      "Built in the 17th century, the Taj Mahal is not just a UNESCO World Heritage Site, but also one of the Seven Wonders of the World. The monument is an epitome of Mughal architecture, featuring intricate inlay work and beautiful gardens. The Taj is best visited at sunrise or sunset when the marble glows with golden hues. Don't forget to visit the surrounding Agra Fort and the Mehtab Bagh for a complete experience. For those who want to explore more, the nearby Fatehpur Sikri is another historical gem.",
    travelTips:
      "To fully experience the Taj Mahal, arrive early to avoid the crowds. Be mindful of the strict security checks, and remember that you can only bring a small bag inside. The weather can get quite hot, so dress comfortably, wear sunscreen, and stay hydrated.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in India: Kedarnath",
    description:
      "Nestled in the Garhwal Himalayas, Kedarnath is a spiritual destination revered by millions of pilgrims. Dedicated to Lord Shiva, this sacred temple is located at an altitude of 3,583 meters. Pilgrims embark on a trek through breathtaking landscapes to reach the temple. The surrounding mountains and serene atmosphere provide a sense of tranquility, making Kedarnath a place of deep spiritual significance and natural beauty.",
    extendedDescription:
      "Kedarnath is one of the Char Dhams, a group of four pilgrimage sites considered to be the most sacred in Hinduism. The trek to Kedarnath is challenging but rewarding, offering mesmerizing views of snow-capped peaks and alpine forests. In addition to the temple, visitors can explore the nearby Vasuki Tal, a high-altitude lake, and the spiritual town of Gaurikund. The temple itself is known for its intricate carvings and stunning architecture.",
    travelTips:
      "Prepare for the trek with good footwear and warm clothing, as temperatures can drop suddenly. Be aware that the trek is strenuous, so take it slow, especially if you're not used to high altitudes. The best time to visit Kedarnath is from May to June and September to October when the weather is more favorable.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in India: Puri",
    description:
      "Puri, a coastal city in Odisha, India, is famous for its cultural heritage, the Jagannath Temple, and beautiful beaches. The Jagannath Temple, one of the Char Dhams, attracts millions of devotees every year. Puri is also known for its annual Rath Yatra (Chariot Festival), which is a major event in the Hindu calendar. Apart from its religious significance, the city offers serene beaches for relaxation, making it a perfect blend of spirituality and leisure.",
    extendedDescription:
      "Puri's charm lies in its mix of culture, history, and natural beauty. The Jagannath Temple, dedicated to Lord Jagannath, is a must-visit for pilgrims, while the Rath Yatra is a grand event that attracts thousands of visitors every year. Puri's golden sandy beaches, like Puri Beach and Chilika Lake, are perfect for a relaxing day. You can also visit the Konark Sun Temple, a UNESCO World Heritage Site, located a short drive away.",
    travelTips:
      "The best time to visit Puri is between October and March when the weather is pleasant. The Rath Yatra festival occurs in June or July, so if you're planning to visit during this time, be prepared for large crowds. For a more peaceful visit, try coming in the off-season.",
    author: "Someone",
    date: "April 22, 2024",
  },
];

const BlogsComp = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
