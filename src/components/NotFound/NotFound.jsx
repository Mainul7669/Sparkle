const NotFound = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to the home page
      </a>
    </div>
  );
};

export default NotFound;
