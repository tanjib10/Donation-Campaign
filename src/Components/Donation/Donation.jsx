import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import CardForDonate from "../CardForDonate/CardForDonate";

const Donation = () => {
  const [show, setIsShow] = useState(false);
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
              {show
                ? donate.map((data) => (
                    <CardForDonate key={data.id} data={data}></CardForDonate>
                  ))
                : donate
                    .slice(0, 4)
                    .map((data) => (
                      <CardForDonate key={data.id} data={data}></CardForDonate>
                    ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setIsShow(!show)}
          className="btn bg-[#009444] text-white block mx-auto my-6"
        >
          {show ? "See less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Donation;
