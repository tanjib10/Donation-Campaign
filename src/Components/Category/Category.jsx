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
    <div>
      <div className="flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="mt-4  rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img className="object-cover" src={image} alt="profile-picture" />
        </div>
        <div className="p-6 text-left">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Natalie Paisley
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            CEO / Co-Founder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
