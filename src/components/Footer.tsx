import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";

interface IContactProps {
  icon: JSX.Element;
  name: string;
  url: string;
};

const Footer: React.FC = () => {
  const contactList = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https:github.com/uufukttas',
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/uufukttas',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/uufukttas',
    },
    {
      icon: <SiGmail />,
      name: 'Mail',
      url: 'mailto:uufukttas@gmail.com'
    },
  ];

  return (
    <div className={`footer-container w-full flex justify-evenly`}>
      <ul className={`contact-list-container w-full flex`}>
        {
          contactList.map((contact: IContactProps, index: number) => (
            <li key={index} className={`contact-list-item w-full`}>
              <Link href={contact.url} className={`w-full flex items-center justify-center`}>
                <span className={`list-item-icon px-4`}>{contact.icon}</span>
                <span className={`list-item-name px-4`}>{contact.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Footer;
