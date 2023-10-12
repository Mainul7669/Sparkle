import BlogsPost from "../../Shared/BlogsPost/BlogsPost";

const Blogs = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: 'url("https://www.ornazone.com/media/wysiwyg/Home-banner/lifelong1.jpg")' }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Explore Our Blogs</h1>
          <p className="mt-2 text-lg md:text-xl ">Stay updated with our latest articles and insights.</p>
        </div>
      </div>

      {/* Blogs Content */}
      <div className="container py-8 mx-auto">
        <BlogsPost/>
      </div>
    </div>
  );
};

export default Blogs;
