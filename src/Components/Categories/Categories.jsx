import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const data = useLoaderData();

  return (
    <div className="w-[95%] mx-auto mt-20 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {data.map((data) => (
        <Category key={data.id} data={data}></Category>
      ))}
    </div>
  );
};

export default Categories;
