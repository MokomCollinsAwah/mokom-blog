import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="">
        <span className="text-6xl">Login</span>
        <form action="" className="mt-5 flex flex-col">
          <label className="my-5 mx-0">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email..."
            className="p-2.5 bg-white"
          />
          <label className="my-5 mx-0">Password:</label>
          <input
            type="text"
            placeholder="Enter your Password..."
            className="p-2.5 bg-white"
          />
          <button className="mt-5 cursor-pointer bg-lightcoral text-white rounded-lg p-2.5">
            Login
          </button>
        </form>
        <button className=" cursor-pointer bg-teal text-white absolute top-16 right-5 p-2.5 rounded-xl">
          <Link to="/register">REGISTER</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
