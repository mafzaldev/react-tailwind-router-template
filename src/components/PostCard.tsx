import React from "react";

const PostCard: React.FC<{
  id?: number;
  title?: string;
  body?: string;
}> = ({ id, title, body }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {id}. {title}
        </h2>
        <p className="text-gray-600 text-base">{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
