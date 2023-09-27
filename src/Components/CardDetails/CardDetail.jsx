/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetail = ({ card }) => {
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
  } = card;
  const handleAddToDonation = () => {
    const addedDonations = [];
    const item = JSON.parse(localStorage.getItem("item"));
    if (!item) {
      addedDonations.push(card);
      localStorage.setItem("item", JSON.stringify(addedDonations));
      // toast("Successfully Done");
    } else {
      const isExist = item.find((card) => card.id === id);
      if (!isExist) {
        addedDonations.push(...item, card);
        localStorage.setItem("item", JSON.stringify(addedDonations));
        toast("Successfully Done");
      } else {
        toast("Donated Before");
      }
    }
  };
  return (
    <div className="mt-12 mx-auto max-w-[80%]">
      <div style={{ position: "relative" }}>
        <img className="w-full h-auto" src={image} alt="" />
        <div className="overlay">
          <button
            onClick={handleAddToDonation}
            className="btn bg-[#FF444A] text-white"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Donate: ${price}
          </button>
        </div>
      </div>
      <h3 className="text-3xl font-bold p-6">{title}</h3>
      <p className="text-lg p-2">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default CardDetail;
