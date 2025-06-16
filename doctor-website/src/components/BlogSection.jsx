import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Understanding Chronic Lung Diseases",
    date: "June 2024",
    image: blog1,
  },
  {
    id: 2,
    title: "When to See a Pulmonologist",
    date: "May 2024",
    image: blog2,
  },
  {
    id: 3,
    title: "Breathing Exercises for Lung Health",
    date: "April 2024",
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Read Our Latest Blog
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-sm text-blue-600 font-semibold">{blog.date}</p>
                <h3 className="text-lg font-bold mt-2 text-gray-800">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
