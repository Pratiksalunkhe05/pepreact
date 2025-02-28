import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogCard = ({ image, date, title, description, author, extendedDescription, travelTips }) => {
  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => window.scrollTo(0, 0)} // Scroll to top when clicking the blog link
      state={{ image, date, title, description, author, extendedDescription, travelTips }}
      className="block"
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title} // Using the title as the alt text for better accessibility
            className="mx-auto h-[250px] w-full object-cover transition duration-700 transform hover:scale-105 hover:skew-x-2"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>{date}</p>
          <p className="line-clamp-1">By {author}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold text-lg">{title}</h1>
          <p className="line-clamp-2 text-sm">{description}</p>
        </div>
        {/* Optional: Display the extended description and travel tips if they exist */}
        {(extendedDescription || travelTips) && (
          <div className="pt-2">
            {extendedDescription && (
              <p className="text-sm text-gray-400">{extendedDescription.substring(0, 100)}...</p>
            )}
            {travelTips && (
              <p className="text-sm text-gray-400 mt-1">{travelTips.substring(0, 100)}...</p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  extendedDescription: PropTypes.string, // Optional
  travelTips: PropTypes.string, // Optional
};

export default BlogCard;
