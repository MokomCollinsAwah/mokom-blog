import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SinglePost = () => {
  return (
    <div className="w-9/12">
      <div>
        <img
          src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <h1>Lorem ipsum dolor, sit amet </h1>
        <div>
          <BiEdit />
          <RiDeleteBin6Fill />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
