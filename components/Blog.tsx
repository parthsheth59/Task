"use client";

import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "@/constants";
import { FaArrowRight } from "react-icons/fa";

interface Blog {
  id: number;
  name: string;
  short_description: string;
  image_url: string;
  writer_name: string;
  createdAt: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.BLOGS)
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data) {
          setBlogs(data.data.slice(0, 3));
        } else {
          setError("Failed to fetch blogs.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch blogs.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="bg-cover bg-center py-12 px-6 md:px-12"
      style={{
        backgroundImage: "url('/Rectangletestimonial-bg.png')",

        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-5xl mx-auto text-black mt-20">
        <h2 className="text-3xl font-bold text-left mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex items-center">
            <img
              src="/Photo_1743504787015.jpg"
              alt="Alex Johnson"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 className="mt-4 font-semibold">- Alex Johnson</h4>
              <p className="text-lg mt-2">
                "Amazing platform! Helped me find exactly what I needed."
              </p>
            </div>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex items-center">
            <img
              src="/Photo_1743504787015.jpg"
              alt="Sarah Williams"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 className="mt-4 font-semibold">- Sarah Williams</h4>
              <p className="text-lg mt-2">
                "Super intuitive and easy to use. Highly recommend!"
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-left mb-6">Blogs</h2>
        <div className="mx-auto">
          <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-300">
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {blogs.map((blog) => (
            <div key={blog.id} className=" text-gray-900 p-4 rounded-lg">
              <img
                src={blog.image_url}
                alt={blog.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{blog.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm mt-2">{blog.short_description}...</p>
              <p className="text-xs mt-1 text-gray-600">
                By {blog.writer_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
