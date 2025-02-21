import Banner from "@/assets/Home/employee-task-management-system.png";
import useAuth from "@/hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

const TaskBanner = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleClick = () => {
    if (user) {
      navigate("/tasks");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="px-2 py-32 bg-white dark:bg-gray-800 md:px-0">
      <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Manage Your Tasks Effortlessly</span>
                <span className="block text-primary xl:inline ml-2">
                  With Our Task Management Platform
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 dark:text-gray-300 sm:max-w-md lg:text-xl md:max-w-3xl">
                Streamline your workflow and collaborate with your team in real-time. Our platform provides a seamless way to manage tasks, track progress, and ensure timely delivery.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <button
                  onClick={handleClick}
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md sm:mb-0 hover:opacity-80 sm:w-auto transition-all duration-300 ease-in-out"
                  aria-label="Get Started"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <NavLink
                  to="/about-us"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src={Banner} alt="Task Management Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBanner;
