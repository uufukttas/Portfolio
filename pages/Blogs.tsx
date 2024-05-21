import React from 'react';
import Main from '@/src/components/Main';
import "../app/globals.css";
import BlogListingPage from '@/src/components/Blogs';

const Blogs: React.FC = () => {
  return (
    <div className="blog-page-container flex h-screen bg-black text-white">
      <Main>
        <BlogListingPage />
      </Main>
    </div>
  );
};

export default Blogs;
