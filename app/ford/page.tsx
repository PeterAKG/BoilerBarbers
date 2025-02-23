"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { FaRegCommentDots } from "react-icons/fa"; // Import text bubble icon

const sections = [
  { title: "Clickbait", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Chef Choice", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Cookie Cache", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Bit by Bit", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Big Bytes", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Data Crunch", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Firewall", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "By Request", description: ["GF", "Vegan"] },
];

type Post = {
  user: string;
  text: string;
};

type PostsState = {
  [key: string]: Post[];
};

export default function Page() {
  const { user } = useUser();
  const [posts, setPosts] = useState<PostsState>({});
  const [activeItem, setActiveItem] = useState<string | null>(null); // Track active food item

  const handlePost = (itemTitle: string, text: string) => {
    if (!text.trim()) return;
    setPosts((prev) => ({
      ...prev,
      [itemTitle]: [{ user: user?.username || "Anonymous", text }, ...(prev[itemTitle] || [])],
    }));
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-6 space-x-4">
        <div className="bg-white p-2 rounded-xl shadow-lg">
          <img 
            src="\hilly.png" 
            alt="Hillenbrand Dining Court" 
            className="w-24 h-24 rounded-lg object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-yellow-500">Hillenbrand Dining Court</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold text-center">{section.title}</h3>
            <div className="mt-3 text-gray-500 text-center">
              {section.description.map((item, index) => (
                <div key={index} className="flex justify-center items-center gap-2 mt-1">
                  {item}
                  <FaRegCommentDots
                    className="text-yellow-500 cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Popup for individual food items */}
      {activeItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setActiveItem(null)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">{activeItem} - Posts</h3>
            {user && (
              <textarea
                className="w-full p-2 border rounded mb-2"
                placeholder="Write your post..."
                onBlur={(e) => handlePost(activeItem, e.target.value)}
              ></textarea>
            )}
            <div className="mt-4">
              {posts[activeItem]?.map((post: Post, index: number) => (
                <div key={index} className="p-2 border-b">
                  <p className="font-bold">{post.user}</p>
                  <p>{post.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
