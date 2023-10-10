import  { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';


const SecondProduct = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      imageSrc: '/public/Products/first.webp',
      title: 'The Air Scoop-Neck Tee',
      price: '$95.00',
    },
    {
      imageSrc: '/public/Products/second.webp',
      title: 'Beaded double necklace',
      price: '$240.00',
    },
    {
      imageSrc: '/public/Products/third.webp',
      title: 'Hoop pendant earrings',
      price: '$144.00',
    },
    {
      imageSrc: '/public/Products/fourth.webp',
      title: 'Embossed hoop earrings',
      price: '$144.00',
    },
    {
      imageSrc: '/public/Products/fifth.webp',
      title: 'Embossed hoop earrings',
      price: '$144.00',
    },
    {
      imageSrc: '/public/Products/sixth.webp',
      title: 'Embossed hoop earring',
      price: '$18.00 – $32.00',
    },
    {
      imageSrc: '/public/Products/seventh.webp',
      title: 'Rhinestone crystal earring',
      price: '$68.00',
    },
    {
      imageSrc: '/public/Products/eight.webp',
      title: 'Embosse hoop earrings',
      price: '$68.00',
    },
  ];

  return (
    <div className="flex flex-col items-center mx-8 mt-10 sm:flex-row sm:mx-8 mb-10">
      {/* Left Side */}
      <div className="w-full sm:w-1/3 relative">
        <img
          src="/public/Products/5.png"
          alt="Image"
          className="w-[340px] h-auto rounded-xl"
        />
        <div className="absolute top-40 lg:right-16 w-full h-full flex flex-col justify-center items-center text-white">
          <h4 className="text-sm text-black font-semibold font-serif mb-2">
            NOSE RINGS
          </h4>
          <h1 className="text-4xl text-black font-serif mb-2">NECKLACES</h1>
          <h3 className="text-black font-semibold mb-2">25 Nov - 29 Nov</h3>
          <p className="text-base text-black underline">See More Products</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-2/3 lg:mt-0 mt-10">
        {/* Grid of product images */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="lg:h-72 text-center flex flex-col items-center mb-2 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index >= 0 && ( // Conditionally render for right-side products
                <div
                  className={`absolute top-0 right-0 p-2 ${
                    hoveredIndex === index ? 'block' : 'hidden'
                  }`}

                  style={{cursor: "pointer",}}
                  onClick={() => {
                    // Handle wishlist click here
                  }}
                  
                >
                  <FaRegHeart size={20} color="black" />
                </div>
              )}
              <img
                src={product.imageSrc}
                alt={product.title}
                className="w-full h-50 object-cover"
              />
              <div
                className={`absolute bottom-12 lg:bottom-14 left-0 w-full lg:h-8 h-10 bg-black bg-opacity-60 ${
                  hoveredIndex === index ? 'block' : 'hidden'
                }`}
              >
                <button className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  Add to Cart
                </button>
              </div>
              <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondProduct;
