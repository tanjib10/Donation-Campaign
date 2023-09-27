/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Category = ({ data }) => {
  const {
    id,
    image,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = data;
  return (
    <Link to={`/details/${id}`}>
      <div className="w-[280px] ml-16 md:ml-2 lg:ml-0">
        <div
          style={{ backgroundColor: card_bg }}
          className="flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img
              className="w-full object-cover"
              src={image}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-left">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
