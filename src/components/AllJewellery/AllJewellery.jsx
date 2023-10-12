
import { FaRegHeart } from "react-icons/fa";
import JsonData from "../../JsonData/JsonData";

const JewelryCard = ({ id, title, price, image }) => {
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
    const imageElement = document.getElementById(id); // Get the image element by its id
    const overlayElement = document.getElementById(`${id}-overlay`); // Get the overlay element
    if (imageElement && overlayElement) {
      imageElement.style.transform = "scale(1.2)"; // Zoom in by 20%
      overlayElement.style.opacity = "1"; // Show the overlay
    }
  };

  const handleMouseLeave = () => {
    const imageElement = document.getElementById(id);
    const overlayElement = document.getElementById(`${id}-overlay`);
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
        <img id={id} src={image} alt={title} style={imageStyle} />
        <div id={`${id}-overlay`} style={overlayStyle}>
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

const AllJewellery = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mx-auto">
      <div className="md:w-[1080px] p-4 flex flex-col md:flex-row flex-wrap justify-center">
        {JsonData.map((jewelry) => (
          <div key={jewelry.id} className="w-full md:w-1/2 lg:w-1/4 px-4">
            <JewelryCard
              id={jewelry.id} // Pass the "id" as a prop
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

export default AllJewellery;
