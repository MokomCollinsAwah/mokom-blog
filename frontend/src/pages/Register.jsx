import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="">
        <span className="text-6xl">Register</span>
        <form action="" className="mt-5 flex flex-col">
          <label className="my-5 mx-0">Username:</label>
          <input
            type="text"
            placeholder="Enter your Username..."
            className="p-2.5 bg-white"
          />
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
          <button className="mt-5 cursor-pointer bg-teal text-white rounded-lg p-2.5">
            Register
          </button>
        </form>
        <button className=" cursor-pointer bg-lightcoral text-white absolute top-16 right-5 p-2.5 rounded-xl">
          <Link to="/login">LOGIN</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
