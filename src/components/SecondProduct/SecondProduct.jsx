
const SecondProduct = () => {
  return (
    <div className="flex mb-6 justify-center mx-10">
   {/* Left Side */}
   <div className="w-1/2 relative">
        <img
          src="/public/Products/5.png" // Replace with your image URL
          alt="Image"
          className="w-[320px] h-auto rounded-xl"
        />
        <div className="absolute top-0 left-0 bottom-0 flex flex-col items-center justify-center text-black text-4xl font-bold">
          <p>Image Text Overlay</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-8">
        {/* Row 1 */}
        <div className="grid grid-cols-4 gap-4">
          {/* Image 1 */}
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/first.webp" alt="Image 1" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 1</p>
          </div>
          {/* Repeat the above structure for images 2, 3, and 4 */}
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/second.webp" alt="Image 1" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 1</p>
          </div>
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/third.webp" alt="Image 1" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 1</p>
          </div>
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/fourth.webp" alt="Image 1" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 1</p>
          </div>
          
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {/* Image 5 */}
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/fifth.webp" alt="Image 5" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 5</p>
          </div>
          {/* Repeat the above structure for images 6, 7, and 8 */}
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/sixth.webp" alt="Image 5" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 5</p>
          </div>
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/seventh.webp" alt="Image 5" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 5</p>
          </div>
          <div className="h-32 text-center flex flex-col items-center">
            <img src="/public/Products/eight.webp" alt="Image 5" className="w-24 h-24 object-cover" />
            <p className="text-sm">Text 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SecondProduct;