import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/blog1.png',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/blog2.png',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/blog3.png',
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#4052EF] mb-12">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative group cursor-pointer overflow-hidden">
              <Link to={`/blog/${post.id}`}>
                <div className="relative aspect-[4/5]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 py-12 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h3 className="text-3xl font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-xl text-gray-200 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
