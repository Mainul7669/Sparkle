import { FaSquareFacebook, FaSquareInstagram, FaSquarePinterest,  } from "react-icons/fa6";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "All Jewelry", href: "/alljewellery", current: false },
    { name: "My Jewelry", href: "/myjewellery", current: false },
    { name: "Add Jewelry", href: "/addjewellery", current: false },
    { name: "Blogs", href: "/blogs", current: false },
  ];

  return (
    <footer className="bg-[#BE9375] py-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Column 1: Logo and Text */}
          <div>
            <a href="/">
              <img
                className="h-8 w-auto mx-auto lg:mx-8 mb-2"
                src="/public/alphabets-flower-monogram-letter-s-free-png.webp"
                alt="Your Company"
              />
            </a>
            <p className="text-white text-base ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>

          {/* Column 2: All Items */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">All Items</h3>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 block mb-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Column 3: Information & Address */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Contact Info
            </h3>
            <p className="text-white text-sm">1234 Main Street</p>
            <p className="text-white text-sm">City, Country</p>
            <p className="text-white text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-col items-center">
              {" "}
              {/* Use flex-col and items-center for vertical alignment */}
              <div className="flex items-center gap-2 my-2">
              <FaSquareFacebook className="text-[#653411] bg-white"/>
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Facebook
                </a>
              </div>
              <div className="my-2 flex items-center gap-2">
                <FaSquarePinterest className="text-[#653411] bg-white"/>
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest
                </a>
              </div>
              <div className="my-2 flex items-center gap-2">
                <FaSquareInstagram className="text-[#653411] bg-white"/>
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white text-sm mt-6 mb-2">
          &copy; 2023 Your Jewelry Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
