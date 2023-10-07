
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <p className="text-center text-white text-sm mt-4">
          &copy; 2023 Your Jewelry Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
