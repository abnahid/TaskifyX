import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900  p-10 w-11/12 lg:w-full mx-auto text-gray-800 dark:text-gray-200 ">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 container max-w-7xl mx-auto">
        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="normal-case text-2xl font-semibold">
              <h1 className="text-[#4A90E2]">TaskifyX</h1>
            </div>
          </div>
          <p className="text-base max-w-72">
            TaskifyX is your ultimate task management platform, designed to help
            you stay organized and achieve success. Streamline your workflow with
            efficient task tracking and collaboration tools.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <p className="text-base font-bold text-gray-800 dark:text-gray-200">
            Quick Links
          </p>
          <ul className="space-y-1 flex flex-col">
            <NavLink
              to="/tasks"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7ED321] dark:hover:text-[#7ED321] link link-hover"
            >
              View Tasks
            </NavLink>
            <NavLink
              to="/addtask"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7ED321] dark:hover:text-[#7ED321] link link-hover"
            >
              Create a Task
            </NavLink>
            <NavLink
              to="/tasks"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7ED321] dark:hover:text-[#7ED321] link link-hover"
            >
              My Tasks
            </NavLink>
            <NavLink
              to="/tasks"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7ED321] dark:hover:text-[#7ED321] link link-hover"
            >
              Completed Tasks
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7ED321] dark:hover:text-[#7ED321] link link-hover"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <p className="footer-title opacity-100 text-gray-800 dark:text-gray-200">
            Get in Touch
          </p>
          <ul className="space-y-1">
            <li>
              <a className="text-gray-600 dark:text-gray-300">
                123 Productivity St,
                <br /> Silicon Valley, USA
              </a>
            </li>
            <li>
              <a className="text-gray-600 dark:text-gray-300">
                support@taskifyx.com
              </a>
            </li>
            <li>
              <a className="text-gray-600 dark:text-gray-300">
                +1 (123) 456-7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-4 container max-w-7xl mx-auto"></div>

      {/* Footer Bottom */}
      <aside className="flex items-center justify-center flex-col lg:justify-between lg:flex-row container max-w-7xl mx-auto">
        <p className="text-gray-800 dark:text-gray-200 text-center lg:text-left">
          © {new Date().getFullYear()} TaskifyX - All rights reserved.
        </p>
        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[#1877F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[#1DA1F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#F56040]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-[#0077B5]" />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
