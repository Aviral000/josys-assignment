import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/posts";

interface Post {
  id: number;
  title: string;
  content: string;
}

const CrudApp: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [editPost, setEditPost] = useState<Post | null>(null);

  const fetchPosts = async ():Promise<void> => {
    try {
      const response = await axios.get<Post[]>(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async ():Promise<void> => {
    try {
      const response = await axios.post<Post>(API_URL, newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: "", content: "" });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async ():Promise<void> => {
    if (editPost) {
      try {
        const response = await axios.put<Post>(`${API_URL}/${editPost.id}`, editPost);
        setPosts(posts.map((post) => (post.id === editPost.id ? response.data : post)));
        setEditPost(null);
      } catch (error) {
        console.error("Error updating post:", error);
      }
    }
  };

  const deletePost = async (id: number):Promise<void> => {
    try {
      await axios.delete<Post>(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Add New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="border p-2 mr-2"
          disabled
        />
        <input
          type="text"
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={createPost} className="bg-blue-500 text-white px-4 py-2">
          Add Post
        </button>
      </div>

      {editPost && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Edit Post</h2>
          <span className="border p-2 mr-2">{editPost.id}</span>
          <input
            type="text"
            placeholder="Title"
            value={editPost.title}
            onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Content"
            value={editPost.content}
            onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
            className="border p-2 mr-2"
          />
          <button onClick={updatePost} className="bg-green-500 text-white px-4 py-2">
            Update Post
          </button>
          <button
            onClick={() => setEditPost(null)}
            className="bg-gray-500 text-white px-4 py-2 ml-2"
          >
            Cancel
          </button>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold">Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border p-4 mb-2">
              <p className="opacity-60">{post.id}</p>
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <button
                onClick={() => setEditPost(post)}
                className="bg-yellow-500 text-white px-4 py-2 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CrudApp;
