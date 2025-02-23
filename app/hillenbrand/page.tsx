"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { FaRegCommentDots } from "react-icons/fa"; // Import text bubble icon


const sections = [
  { title: "Clickbait", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Chef Choice", description: ["Scrambled Eggs", "Smokey Links", "Buttermilk Biscuits", "Chorizo Gravy", "Hash Brown"] },
  { title: "Cookie Cache", description: ["Cinnamon Coffeecake", "Chocolate Candy Piece Cookie"] },
  { title: "Bit by Bit", description: ["Rotini", "Marinara Sauce", "GF Alfredo Sauce", "Garlic Breadstick", "Roasted Broccoli"] },
  { title: "Big Bytes", description: ["French Toast Sticks", "Birthday Pancake", "Sugar Free Maple Pancake Syrup", "Pancake Syrup", "Chocolate Ganache", "Whipped Topping", "Strawberry Syrup"] },
  { title: "Data Crunch", description: ["Vanilla Iced Coffee", "MYO Avocado Toast Bar", "Brunch Salad Bar", "Orange Wedges", "Yogurt Bar"] },
  { title: "Firewall", description: ["French Toast Sticks", "Birthday Pancake", "Sugar Free Maple Pancake Syrup", "Pancake Syrup", "Chocolate Ganache", "Whipped Topping", "Strawberry Syrup"] },
  { title: "By Request", description: ["GF Blueberry Muffin", "GF White Bread", "Cauliflower Crust Pepperoni Pizza", "Cauliflower Crust Cheese Pizza", "GF Hot Dog Bun", "GF Hamburger Bun", "Cherry Italian Ice"] },
];

type Post = {
  user: string;
  text: string;
  timestamp: string;
};

type PostsState = {
  [key: string]: Post[];
};

export default function Page() {
  const { user } = useUser();
  const [posts, setPosts] = useState<PostsState>({});
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [newPostText, setNewPostText] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(10);

  const handlePost = (itemTitle: string, text: string) => {
    if (!text.trim() || isCooldown) return;

    const timestamp = new Date().toLocaleString();
    setPosts((prev) => ({
      ...prev,
      [itemTitle]: [{ user: user?.primaryEmailAddress?.emailAddress || "Anonymous", text, timestamp }, ...(prev[itemTitle] || [])],
    }));

    setNewPostText("");
    setIsCooldown(true);
    setCooldownTime(10);

    const interval = setInterval(() => {
      setCooldownTime((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setIsCooldown(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6">
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
                    onClick={() => setActiveItem(item as string)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
              <div>
                <textarea
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Write your post..."
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  disabled={isCooldown}
                ></textarea>
                <button
                  className={`w-full p-2 rounded ${
                    isCooldown || !newPostText.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-500 text-black"
                  }`}
                  onClick={() => handlePost(activeItem, newPostText)}
                  disabled={isCooldown || !newPostText.trim()}
                >
                  {isCooldown ? `Wait ${cooldownTime}s` : "Post"}
                </button>
              </div>
            )}
            <div className="mt-4">
              {posts[activeItem]?.map((post: Post, index: number) => (
                <div key={index} className="p-2 border-b">
                  <p className="font-bold">{post.user}</p>
                  <p>{post.text}</p>
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
