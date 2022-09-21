import React from "react";

const Post = () => {
  return (
    <div className="w-96 mt-2 mr-6 mb-10 ml-6">
      <img
        src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="w-full h-64 object-cover rounded-md"
      />
      <div className="flex flex-col items-center ">
        <div className="flex ">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="font-font2 text-lg font-bold mt-4">
          Lorem ipsum dolor sit amert
        </span>
        <hr />
        <span className="font-font1 italic text-xs text-gray2">1 hour ago</span>
      </div>
      <p className="font-font3 text-gray3 text-sm overflow-hidden text-ellipsis ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum
        rem commodi illum ipsum, in doloribus eum alias quibusdam porro vitae
        iure vel sequi autem, voluptate quia, sapiente nihil vero!
      </p>
    </div>
  );
};

export default Post;
