import aboutImage from "../assets/Home/about-image.jpg";

const About = () => {
    return (
        <div className="   dark:bg-gray-900">
            {/* Left Side - Image */}

            <div className=" min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-12">
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={aboutImage}
                        alt="About TaskifyX"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="md:w-1/2 flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold text-primary dark:text-white">
                        About TaskifyX
                    </h1>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                        TaskifyX is your go-to solution for seamless task management. Designed for both individuals and teams, it helps you stay on top of your tasks with a simple, yet powerful interface.
                    </p>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                        Features include:
                    </p>
                    <ul className="text-gray-600 text-lg list-disc pl-6 dark:text-gray-300">
                        <li>Drag-and-drop task organization</li>
                        <li>Real-time synchronization</li>
                        <li>Intelligent reminders and notifications</li>
                        <li>Customizable task categories</li>
                    </ul>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                        TaskifyX is built with the latest technology to ensure speed, security, and reliability.
                    </p>

                    {/* Conclusion Button */}
                    <div>
                        <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition dark:bg-primary dark:hover:bg-blue-600">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
