import React from "react";
import { FaUser, FaCalendar, FaTag } from "react-icons/fa";

export default function BlogPage() {
  
  const blogPosts = [
    {
      id: 1,
      image: "/blog1.png", 
      title: "Going all-in with millennial design",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    },
    {
      id: 2,
      image: "/blog2.png", 
      title: "Exploring new ways of decorating",
      author: "Admin",
      date: "10 Oct 2022",
      category: "Interior",
      description:
        "Exploring creative and unique ways to decorate your home with a personal touch. Discover amazing ideas and tips.",
    },
    {
      id: 3,
      image: "/blog3.png", 
      title: "Handmade pieces for your home",
      author: "Admin",
      date: "08 Oct 2022",
      category: "Handmade",
      description:
        "Discover the beauty of handmade crafts for your home, adding a touch of uniqueness and creativity to your space.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden mb-8"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                  <span className="flex items-center">
                    <FaUser className="mr-2" /> {post.author}
                  </span>
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="mr-2" /> {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

       
        <div>
         
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                { name: "Crafts", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior", count: 1 },
                { name: "Wood", count: 6 },
              ].map((category) => (
                <li
                  key={category.name}
                  className="flex justify-between text-gray-700"
                >
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {blogPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-medium hover:underline">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
