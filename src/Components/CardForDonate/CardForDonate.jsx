import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardForDonate = ({ data }) => {
  const {
    id,
    image,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = data;
  return (
    <div className="w-full md:ml-2 lg:ml-0">
      <div
        style={{ backgroundColor: card_bg }}
        className="flex flex-col lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            className="min-h-full object-cover"
            src={image}
            alt="profile-picture"
          />
        </div>
        <div className="px-8 py-8 text-left">
          <p
            style={{ color: text_button_bg }}
            className="block font-bold p-2 rounded-md border-spacing-2"
          >
            {category}
          </p>
          <h4
            style={{ color: category_bg }}
            className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
          >
            {title}
          </h4>
          <p
            style={{ color: category_bg }}
            className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
          >
            ${price}.00
          </p>
          <Link to={`/details/${id}`}>
            <button
              style={{ backgroundColor: text_button_bg }}
              className="btn text-center text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardForDonate;
