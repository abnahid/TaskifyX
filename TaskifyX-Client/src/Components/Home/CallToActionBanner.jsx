import { NavLink } from "react-router-dom";
const CallToActionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-lg p-8 flex justify-between items-center relative max-w-6xl mx-auto">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
        }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">
          Join the Best Matrimony Platform
        </h2>
        <p className="text-lg">
          Your journey to finding someone special begins here.
        </p>
      </div>

      <NavLink to="/register">
        <button className="relative z-10 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </NavLink>
    </div>
  );
};

export default CallToActionBanner;
