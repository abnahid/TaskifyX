const ContactPage = () => {
    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
                    Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
                    Have questions or need assistance? We&apos;re here to help you on your
                    journey to finding the perfect life partner.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
                            Contact Information
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                            Email:{" "}
                            <a
                                href="mailto:support@matrimonynexus.com"
                                className="text-BgPrimary dark:text-BgPrimary"
                            >
                                support@matrimonynexus.com
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                            Phone:{" "}
                            <a href="tel:+880123456789" className="text-BgPrimary dark:text-BgPrimary">
                                +880-123-456-789
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                            Address: Dhaka, Bangladesh
                        </p>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-BgPrimary hover:text-BgSecondary dark:text-BgPrimary dark:hover:text-BgSecondary">
                                <i className="fab fa-facebook text-2xl"></i>
                            </a>
                            <a href="#" className="text-BgPrimary hover:text-BgSecondary dark:text-BgPrimary dark:hover:text-BgSecondary">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="text-BgPrimary hover:text-BgSecondary dark:text-BgPrimary dark:hover:text-BgSecondary">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-BgPrimary focus:border-BgPrimary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-BgPrimary dark:focus:border-BgPrimary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-BgPrimary focus:border-BgPrimary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-BgPrimary dark:focus:border-BgPrimary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-BgPrimary focus:border-BgPrimary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-BgPrimary dark:focus:border-BgPrimary"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:text-white focus:outline-none focus:ring-2 focus:ring-BgPrimary focus:ring-offset-2 dark:bg-primary dark:hover:bg-primary dark:focus:ring-BgPrimary dark:focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
