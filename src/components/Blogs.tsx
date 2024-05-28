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
        title: 'VERSİYON KONTROL SİSTEMİ NEDİR?',
        excerpt: 'Versiyon Kontrol Sistemini, basitçe anlatmak gerekirse...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qILoDt2YUOOXcMnAZU-fsg.png',
        link: 'https://uufukttas.medium.com/versiyon-kontrol-sistemi-nedir-2a8dfbbb3c60',
        date: 'May 30, 2019'
    },
    {
        id: 2,
        title: 'Git, Github Nedir?',
        excerpt: 'Git, bir önceki blog yazımda da belirttiğim gibi...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MCaGlEJVvuE5Cn5uXPhw9g.png',
        link: 'https://uufukttas.medium.com/git-github-nedir-f42f7fdb296',
        date: 'June 15, 2019'
    },
    {
        id: 3,
        title: 'Veri Yapıları Nedir?',
        excerpt: 'Veri yapılarına girmeden önce, algoritmanın ve verinin ne olduğunu...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-6V8_7IyqPmBhYU_PCPNjw.png',
        link: 'https://medium.com/@uufukttas/veri-yap%C4%B1lar%C4%B1-nedir-873da17aad68',
        date: 'June 30, 2019'
    },
    {
        id: 4,
        title: 'Veri Yapıları Nedir?— 2',
        excerpt: 'Önceki blogda, birkaç veri yapısından bahsettik. Şimdi ağaç veri yapıları ile ...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*d5ZnfnUqHA7IgqI1VHNzyQ.png',
        link: 'https://medium.com/@uufukttas/veri-yap%C4%B1lar%C4%B1-nedir-2-22d38e47239',
        date: 'July 17, 2019'
    },
    {
        id: 5,
        title: 'WHAT IS THE WEB DEVELOPMENT?',
        excerpt: 'Web development is an internet technology that has been developing rapidly...',
        image: '/web_development.webp',
        link: 'https://medium.com/@uufukttas/what-is-the-web-development-33d67c937076',
        date: 'Jan 05, 2020',
    },
    {
        id: 6,
        title: 'CSS Nedir?',
        excerpt: 'Kısaltmanın açılımı Cascading Style Sheet olan, Türkçesi ise Basamaklı Stil Şablonu olarak...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YoD2ASUoB6dS4kE66oRn8w.png',
        link: 'https://medium.com/@uufukttas/css-nedir-504d7d5dcf51',
        date: 'Apr 06, 2021'
    },
    {
        id: 7,
        title: 'Flexbox Nedir?',
        excerpt: 'CSS Flexible Box Layout, yani kısaca Flexbox bir katman modeli...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5LPZn55-SumLvBjEeqAKgg.png',
        link: 'https://medium.com/@uufukttas/flexbox-nedi%CC%87r-e5aac436c48c',
        date: 'Apr 25, 2021'
    },
    {
        id: 8,
        title: 'Grid Nedir?',
        excerpt: 'CSS Grid Layout, yani Grid katman modeli, sayfa içerisinde konumlandırılması gereken elementi...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nJRQEuIrElkXk4cYyO8tEQ.png',
        link: 'https://medium.com/@uufukttas/gri%CC%87d-nedi%CC%87r-695ee2da8599',
        date: 'Jun 07, 2021'
    },
    {
        id: 9,
        title: 'Webpack nedir?',
        excerpt: 'Webpack Node.js tabanlı, modern JavaScript uygulamaları için üretilen pek çok bağımlılığa...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bBW2CgKSvSr4sD-7LZ6bLg.png',
        link: 'https://medium.com/@uufukttas/webpack-nedir-8839d29c0c4a',
        date: 'Nov 05, 2022'
    },
    {
        id: 10,
        title: 'What is the GIT?',
        excerpt: 'Git is a version control system commonly used by software developers to manage...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nEMKN5yRcFM9ao-sk2uiyg.png',
        link: 'https://medium.com/@uufukttas/what-is-the-git-c9b68b14600',
        date: 'Feb 11, 2023'
    },
    {
        id: 11,
        title: 'What is the GITHUB?',
        excerpt: 'Github is a web-based platform that provides hosting for software...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zt9baklrbCgJCGW0uWqFGA.png',
        link: 'https://medium.com/@uufukttas/what-is-the-github-d5cb02c2eced',
        date: 'Feb 13, 2023'
    },
    {
        id: 12,
        title: 'What is the Internet?',
        excerpt: 'Internet is a global information network that connects devices ...',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O_RnVBx_zZFvFRyIOJ91Dg.png',
        link: 'https://medium.com/@uufukttas/what-is-the-internet-7ac2a2a46ed0',
        date: 'Jan 05, 2024'
    }
];

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
    <div className="bg-white p-4 shadow-md rounded-md h-full w-full mb-6">
        <img src={blog.image} alt={blog.title} className="w-full h-32 object-fit rounded-md" style={{width: "450px", height: "250px"}}/>
        <div className="mt-4">
            <h3 className="text-xl font-semibold text-black">{blog.title}</h3>
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
            {blogs.reverse().map(blog => (
                <div key={blog.id} className="w-full md:w-1/3 px-3 mb-6">
                    <BlogCard blog={blog} />
                </div>
            ))}
        </div>
    </div>
);

export default BlogListingPage;
