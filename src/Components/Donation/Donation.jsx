import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import CardForDonate from "../CardForDonate/CardForDonate";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNodata] = useState(false);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      setDonate(item);
    } else {
      setNodata("No data found");
    }
  }, []);
  return (
    <div>
      <Nav></Nav>
      <div>
        {noData ? (
          <p
            className="h-[80vh]  flex justify-center
      items-center"
          >
            {noData}
          </p>
        ) : (
          <div>
            <div
              className="w-[70%] mx-auto mt-12 grid 
              grid-cols-1 lg:grid-cols-2
              gap-4"
            >
              {donate.map((data) => (
                <CardForDonate key={data.id} data={data}></CardForDonate>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
