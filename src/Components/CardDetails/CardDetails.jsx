import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import CardDetail from "./CardDetail";

const CardDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const cardData = useLoaderData();
  //   console.log(cardData);

  useEffect(() => {
    const findData = cardData.find((data) => data.id === parseInt(id));
    setCard(findData);
  }, [id, cardData]);
  //   console.log(data);
  return (
    <div>
      <Nav></Nav>
      <CardDetail card={card}></CardDetail>
    </div>
  );
};

export default CardDetails;
