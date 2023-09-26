import Nav from "../Nav/Nav";

const Banner = () => {
  return (
    <div className="h-[70vh]">
      <div
        className="hero min-h-[80vh] relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/1mN2knx/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="z-10 absolute inset-0 bg-white opacity-95">
          <Nav></Nav>
        </div>
        <div className="hero-content text-center relative z-10 flex flex-col">
          <div className="">
            <h1 className="text-2xl lg:text-4xl mt-32 lg:mt-0 text-black font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className=" mt-3 inline-flex">
            <input
              type="text"
              placeholder="Search here.."
              className="input input-bordered w-96 max-w-xs"
            />
            <button className="btn btn-error rounded-xl text-white flex flex-col justify-center items-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
