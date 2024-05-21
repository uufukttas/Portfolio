import React from 'react';

interface Blog {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    link: string;
    date: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: 'Blog Post 1',
        excerpt: 'This is a short description of blog post 1.',
        image: 'https://via.placeholder.com/150',
        link: '#',
        date: 'January 1, 2024'
    },
    {
        id: 2,
        title: 'Blog Post 2',
        excerpt: 'This is a short description of blog post 2.',
        image: 'https://via.placeholder.com/150',
        link: '#',
        date: 'February 1, 2024'
    },
    {
        id: 3,
        title: 'Blog Post 3',
        excerpt: 'This is a short description of blog post 3.',
        image: 'https://via.placeholder.com/150',
        link: '#',
        date: 'March 1, 2024'
    }
    // Add more blog posts as needed
];

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
    <div className="bg-white p-4 shadow-md rounded-md h-full w-full mb-6">
        <img src={blog.image} alt={blog.title} className="w-full h-32 object-cover rounded-md" />
        <div className="mt-4">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="mt-2 text-gray-600">{blog.excerpt}</p>
            <p className="mt-2 text-gray-400 text-sm">{blog.date}</p>
            <a href={blog.link} className="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
        </div>
    </div>
);

const BlogListingPage: React.FC = () => (
    <div className="p-8">
        <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
        <div className="flex flex-wrap -mx-3">
            {blogs.map(blog => (
                <div key={blog.id} className="w-full md:w-1/3 px-3 mb-6">
                    <BlogCard blog={blog} />
                </div>
            ))}
        </div>
    </div>
);

export default BlogListingPage;
