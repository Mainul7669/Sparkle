import { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";



const BlogsPost = () => {
  const initialData = [
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/pearl-bracelet-ZYNTCM2.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/the-wedding-rings-close-up-P6DNNDT.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/necklace-P9RHZ4L.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/high-angle-view-of-bride-jewelry-on-sofa-5JUCL23.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/wedding-MUJ89L8.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    { imageSrc: 'http://richard.portocrafting.com/luxdiamond/wp-content/uploads/sites/11/2022/03/gold-jewelry-9YRSRRJ.jpg', title: 'Sed Ut Perspiciatis', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
    // You can add more objects to the array as needed.
  ];

  const [data, setData] = useState(initialData);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-5">
        <h1 className="text-4xl font-semibold text-[#653411] mb-6 mt-10 font-serif text-center lg:text-center">
          Recently Post
        </h1>
        <p className="text-gray-500 text-lg lg:text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          <br />
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-4 ">
              <div className="relative aspect-w-1 aspect-h-1">
                <img
                  src={item.imageSrc}
                  alt={`Image ${index}`}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>
              <h1 className='text-3xl font-semibold text-[#653411] mt-4 mb-4 font-mono'>{item.title}</h1>
              <p className="text-gray-500 text-lg mt-2">{item.text}</p>
              <button className='text-[#DC925E] font-semibold mt-3 mb-3 text-lg flex items-center gap-4 hover:text-[#653411]'
              >Read More <FaGreaterThan className='text-sm'/> 
              
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;
