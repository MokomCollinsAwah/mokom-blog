import { GrFormAdd } from "react-icons/gr";

const Write = () => {
  return (
    <div className="pt-20">
      <img
        src="https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="ml-40 w-3/4 h-64 rounded-xl object-cover"
      />
      <form action="" className="relative">
        <div className="flex ml-40 items-center">
          <label htmlFor="fileinput">
            <GrFormAdd
              size={20}
              className="w-6 h-6 rounded-full border flex items-center justify-center text-gray2 cursor-pointer"
            />
          </label>
          <input type="file" id="fileinput" className="hidden" />
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="text-xl w-9/12 p-5 focus:outline-none"
          />
        </div>
        <div className="ml-40 flex items-center">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="text-lg w-9/12 p-5 focus:outline-none h-screen"
          ></textarea>
        </div>
        <button className="absolute top-5 right-12 text-sm text-white bg-teal p-2.5 border-none rounded-xl cursor-pointer">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
