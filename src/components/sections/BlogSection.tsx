
import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden">
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                    <p className="text-sm text-gray-200">{post.excerpt}</p>
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
