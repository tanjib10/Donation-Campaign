import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center h-[70vh] text-center">
        <h1 className="text-2xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link className="text-red-500" to="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
