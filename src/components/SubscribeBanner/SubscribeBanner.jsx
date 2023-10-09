const SubscribeBanner = () => {
    return (
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8">
          {/* Left Side */}
          <div className="sm:col-span-1 bg-[#DC915D] text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold ">
              Join Our Newsletter
            </div>
            <div className="mt-4 text-gray-600">
              Stay updated with our latest news and offers.
            </div>
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <button
                  className="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Right Side (Image) */}
          <div className="sm:col-span-1">
            <img
              src="/public/everything-you-need-to-know-about-marriage-in-papua-new-guinea-01.670918.webp" // Replace with your image path
              alt="Banner Image"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SubscribeBanner;
  