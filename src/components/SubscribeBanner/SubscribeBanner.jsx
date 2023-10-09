const SubscribeBanner = () => {
  return (
    <div className="w-full mb-10">
      <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 gap-0">
        {/* Left Side */}
        <div className="sm:col-span-1 bg-[rgb(206,149,112)] text-white p-8 lg:p-24">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Keep in Touch with Us
          </div>
          <div className="mt-4 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div className="mt-6">
            <div className="lg:flex lg:items-center lg:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="lg:w-full w-full px-4 py-4 text-gray-700 border border-gray-300 rounded-full focus:outline-none"
              />
              <button className="hidden lg:block lg:absolute lg:left-[480px] px-10 py-2 text-white bg-[#653411] rounded-full text-md font-semibold transition duration-300">
                Subscribe
              </button>
            </div>
            <button className="block mt-4 px-10 py-3 text-white bg-[#653411] rounded-full text-md font-semibold transition duration-300 lg:hidden ml-14">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="sm:col-span-1">
          <img
            src="/public/everything-you-need-to-know-about-marriage-in-papua-new-guinea-01.670918.webp" // Replace with your image path
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
