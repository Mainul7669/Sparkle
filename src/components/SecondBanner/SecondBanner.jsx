

const SecondBanner = () => {
  return (
    <div className="relative mb-10">
      <img
        src="/public/background-2-scaled.webp"
        alt="Banner Image"
        className="w-full h-auto lg:h-[600px]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
            <h3 className="w-fit text-xs font-semibold text-black bg-[#FAC213] px-4 text-center py-2 rounded-full ">NEW SEASON</h3>
          <h1 className="text-3xl font-semibold mb-4">
            Back to the past : 
          </h1>
          <p className="text-md mb-4">You can hide so much behind theatrics, and I don't need to do that any more. My relationships <br /> with producers or photographers - these are relationships that took years.</p>

          <button className="text-white border-2 border-white py-2 px-4 lg:px-8 hover:text-black hover:bg-white">View all products</button>
        </div>
      </div>
    </div>
  );
};


export default SecondBanner;