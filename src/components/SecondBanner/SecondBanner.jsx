import  { useState, useEffect } from "react";

const SecondBanner = () => {
  const [index, setIndex] = useState(0);
  const texts = ["Necklaces", "Bracelets", "Earrings"];
  const [text, setText] = useState(texts[index]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= texts[index].length) {
        setText(texts[index].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // After displaying one text, wait for a moment and then move to the next text
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Adjust the delay time (in milliseconds) between texts
      }
    }, 100); // Adjust the typing speed by changing the interval (in milliseconds)

    return () => {
      clearInterval(typingInterval); // Clean up the interval when the component unmounts
    };
  }, [index]);

  return (
    <div className="relative mb-10 lg:mt-10">
    <div className="w-full h-auto lg:h-[600px] relative">
      <img
        src="/public/background-2-scaled.webp"
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
      {/* Blur Overlay */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-50 filter"
      ></div>
    </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="w-fit text-xs font-semibold text-black bg-[#FAC213] px-4 text-center py-2 rounded-full mb-2 lg:mb-8 lg:ml-[280px]">
            NEW SEASON
          </h3>
          <h1 className=" text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
            Back to the past: {text}
          </h1>
          <p className="text-md mb-4">
            You can hide so much behind theatrics, and I don't need to do that
            anymore. My relationships <br /> with producers or photographers -
            these are relationships that took years.
          </p>

          <button className="text-white border-2 border-white py-2 px-4 lg:px-8 hover:text-black hover:bg-white">
            View all products
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
