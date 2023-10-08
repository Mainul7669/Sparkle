const SecondProduct = () => {
  
  return (
    <div className="flex flex-col items-center mx-8 mt-10 sm:flex-row sm:mx-8 mb-10">
      {/* Left Side */}
      <div className="w-full sm:w-1/3  relative">
        <img
          src="/public/Products/5.png" // Replace with your image URL
          alt="Image"
          className="w-[340px] h-auto rounded-xl"
        />

        <div className="absolute top-40 lg:right-16 w-full h-full flex flex-col justify-center items-center text-white">
            <h4 className="text-sm text-black font-semibold font-serif mb-2">
              NOSE RINGS
            </h4>
            <h1 className="text-4xl text-black font-serif mb-2">
              NECKLACES
            </h1>
            <h3 className="text-black font-semibold mb-2">25 Nov - 29 Nov</h3>
            <p className="text-base text-black underline">See More Products</p>
          </div>


      </div>

      {/* Right Side */}
      <div className="w-full sm:w-2/3 lg:mt-0 mt-10">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Image 1 */}
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/first.webp"
              alt="Image 1"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              The Air Scoop-Neck Tee
            </h2>
            <p className="text-sm text-gray-600">$95.00</p>
          </div>
          {/* Repeat the above structure for images 2, 3, and 4 */}
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/second.webp"
              alt="Image 1"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Beaded double necklace
            </h2>
            <p className="text-sm text-gray-600">$240.00</p>
          </div>
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/third.webp"
              alt="Image 1"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Hoop pendant earrings
            </h2>
            <p className="text-sm text-gray-600">$144.00</p>
          </div>
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/fourth.webp"
              alt="Image 1"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Embossed hoop earrings
            </h2>
            <p className="text-sm text-gray-600">$144.00</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
          {/* Image 5 */}
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/fifth.webp"
              alt="Image 5"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Embossed hoop earrings
            </h2>
            <p className="text-sm text-gray-600">$144.00</p>
          </div>
          {/* Repeat the above structure for images 6, 7, and 8 */}
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/sixth.webp"
              alt="Image 5"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Embossed hoop earring
            </h2>
            <p className="text-sm text-gray-600">$18.00 – $32.00</p>
          </div>
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/seventh.webp"
              alt="Image 5"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Rhinestone crystal earring
            </h2>
            <p className="text-sm text-gray-600">$68.00</p>
          </div>
          <div className="lg:h-72 text-center flex flex-col items-center mb-2">
            <img
              src="/public/Products/eight.webp"
              alt="Image 5"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-sm font-semibold mt-2">
              Embosse hoop earrings
            </h2>
            <p className="text-sm text-gray-600">$68.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProduct;
