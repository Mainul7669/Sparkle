import { FaRegHeart } from "react-icons/fa";

const JewelryCard = ({ title, price, image }) => {
  const imageContainerStyle = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "auto",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transition: "opacity 0.3s ease",
  };

  const buttonStyle = {
    background: "transparent",
    color: "white",
    padding: "2px 2px",
    fontSize: "14px",
    cursor: "pointer",
  };

  const wishlistIconStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    color: "black",
    fontSize: "15px",
    cursor: "pointer",
  };

  const handleMouseEnter = () => {
    const imageElement = document.getElementById(title); // Get the image element by its title
    const overlayElement = document.getElementById(`${title}-overlay`); // Get the overlay element
    if (imageElement && overlayElement) {
      imageElement.style.transform = "scale(1.2)"; // Zoom in by 20%
      overlayElement.style.opacity = "1"; // Show the overlay
    }
  };

  const handleMouseLeave = () => {
    const imageElement = document.getElementById(title);
    const overlayElement = document.getElementById(`${title}-overlay`);
    if (imageElement && overlayElement) {
      imageElement.style.transform = "scale(1)"; // Reset the scale
      overlayElement.style.opacity = "0"; // Hide the overlay
    }
  };

  return (
    <div className="bg-white p-4 mb-4">
      <div
        style={imageContainerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img id={title} src={image} alt={title} style={imageStyle} />
        <div id={`${title}-overlay`} style={overlayStyle}>
          <button style={buttonStyle}>Add to Cart</button>
        </div>
        <div
          style={wishlistIconStyle}
          onClick={() => {
            // Handle wishlist click here
          }}
          className="relative"
        >
          <FaRegHeart />
        </div>
      </div>
      <h2 className="text-sm font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-600">{price}</p>
    </div>
  );
};

const FirstProduct = () => {
  // Sample data for jewelry cards
  const jewelryData = [
    {
      title: "The Air Scoop-Neck Tee",
      price: "$95.00",
      image: "/public/Products/first.webp",
    },
    {
      title: "Beaded double necklace",
      price: "$240.00",
      image: "/public/Products/second.webp",
    },
    {
      title: "Twisted hoop earrings",
      price: "$144.00",
      image: "/public/Products/third.webp",
    },
    {
      title: "Hoop pendant earrings",
      price: "$144.00",
      image: "/public/Products/fourth.webp",
    },
    {
      title: "Embossed hoop earrings",
      price: "$144.00",
      image: "/public/Products/fifth.webp",
    },
    {
      title: "Embossed hoop earring",
      price: "$18.00 – $32.00",
      image: "/public/Products/sixth.webp",
    },
    {
      title: "Rhinestone crystal earring",
      price: "$68.00",
      image: "/public/Products/seventh.webp",
    },
    {
      title: "Embosse hoop earrings",
      price: "$68.00",
      image: "/public/Products/eight.webp",
    },
    // Add more jewelry items as needed
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center mx-auto">
      {/* Full-length card on the left */}
      <div className="md:w-[430px] p-4">
        <div className="bg-white p-4 mb-4 relative">
          <img
            src="/public/Products/big.png"
            alt="Featured Jewelry"
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute top-40 left-0 w-full h-full flex flex-col justify-center items-center text-white">
            <h4 className="text-sm text-black font-semibold font-serif mb-2">
              NOSE RINGS
            </h4>
            <h1 className="text-4xl text-black font-serif mb-2">
              Nose Earrings
            </h1>
            <h3 className="text-black font-semibold mb-2">25 Nov - 29 Nov</h3>
            <p className="text-base text-black underline">See More Products</p>
          </div>
        </div>
      </div>

      <div className="md:w-[1080px] p-4 flex flex-col md:flex-row flex-wrap justify-center">
        {jewelryData.map((jewelry, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4">
            <JewelryCard
              title={jewelry.title}
              price={jewelry.price}
              image={jewelry.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstProduct;
