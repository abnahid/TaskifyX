import BannerImg from "@/assets/Home/employee-task-management-system.png";
import { useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setVideoUrl("https://www.youtube.com/embed/tT89OZ7TNwc?si=BCkbnDjZmY5WLqpO");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Why choose <span className="text-primary dark:text-blue-400">TaskMaster Pro</span>
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-500 dark:text-blue-400 mr-2" />
              Efficiently manage tasks and projects
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-500 dark:text-blue-400 mr-2" />
              Real-time collaboration with team members
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-500 dark:text-blue-400 mr-2" />
              Smart reminders and deadline tracking
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-500 dark:text-blue-400 mr-2" />
              Secure, cloud-based task management
            </li>
          </ul>
          <Link to="/tasks">
            <button className="mt-6 px-6 py-3 text-white bg-primary dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition">
              Get Started Now
            </button>
          </Link>
        </div>

        {/* Video/Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <img src={BannerImg} alt="Task Management" className="rounded-lg shadow-lg" />
          <button
            onClick={handleOpenModal}
            className="absolute bg-white dark:bg-gray-800 rounded-full p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <FaPlay className="text-primary dark:text-blue-400 text-3xl" />
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-0 right-0 text-black dark:text-white text-2xl p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <IoMdClose />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
