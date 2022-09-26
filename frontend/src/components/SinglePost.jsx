import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SinglePost = () => {
  return (
    <div className="w-9/12">
      <div className="p-5 pr-0">
        <img
          src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-72 w-full rounded object-cover"
        />
        <h1 className="font-font1 mt-2.5 text-center text-xl font-bold">
          Lorem ipsum dolor, sit amet
          <div className="flex justify-end gap-2 text-base cursor-pointer">
            <BiEdit className="text-teal" />
            <RiDeleteBin6Fill className="text-tomato" />
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-base font-font3 text-color1">
          <span>
            Author: <b>Name</b>
          </span>
          <span>
            Date: <b>1 hour</b>
          </span>
        </div>
        <div className="text-gray-light text-lg">
          <p className="first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolores aliquid odio, illo pariatur a explicabo eos quibusdam ex
            totam, obcaecati enim, voluptatem accusamus laborum numquam. Id illo
            quisquam esse. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Reiciendis dolores aliquid odio, illo pariatur a explicabo eos
            quibusdam ex totam, obcaecati enim, voluptatem accusamus laborum
            numquam. Id illo quisquam esse. quisquam esse. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Reiciendis dolores aliquid
            odio, illo pariatur a explicabo eos quibusdam ex totam, obcaecati
            enim, voluptatem accusamus laborum numquam. Id illo quisquam esse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
