import  { useState, useEffect } from 'react';

const Banner = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Use a timeout to delay the animation
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Adjust the delay as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#BF9376] lg:pt-10 gap-6 pb-8 mb-4">
      {/* Change the background color here */}
      {/* Text Content */}
      <div className="md:w-1/2 text-white p-8 lg:pl-40">
        <h3
          className="text-[#653411] text-xl mb-2 font-serif font-bold"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.5s ease, transform 1.5s ease',
          }}
        >
          A Jewelry Designer with Morvin
        </h3>
        <h1
          className="text-4xl md:text-4xl font-serif font-bold mb-4"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.5s ease, transform 1.5s ease 0.5s',
          }}
        >
          This is Precious Jewelry in Life That Will Increase The Value of Your
          Life
        </h1>
        <p
          className="text-lg md:text-xl mb-8"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.5s ease, transform 1.5s ease 1s',
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="bg-[#653411] text-white hover:bg-[#C27C4C] hover:text-white py-2 px-4 lg:py-3 lg:px-7 rounded-full text-lg"
          >
            Explore Now
          </a>
          <a
            href="#"
            className="border-2 hover:border-none text-white hover:bg-[#C27C4C] hover:text-white py-2 px-4 lg:py-3 lg:px-7 rounded-full text-lg"
          >
            More Product
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/12/18/15/rings-2634929_640.png"
          alt="Banner"
          className="w-full lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
