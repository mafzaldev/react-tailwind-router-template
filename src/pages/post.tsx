import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const [post, setPost] = useState<Post>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <PostCard id={post?.id} title={post?.title} body={post?.body} />
    </div>
  );
};

export default Post;
