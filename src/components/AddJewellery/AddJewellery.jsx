
const AddJewellery = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">

        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
              <textarea id="description" className="w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 text-sm font-semibold mb-2">Price</label>
              <input type="number" id="price" className="w-full border border-gray-300 p-2 rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-semibold mb-2">Image URL</label>
              <input type="text" id="image" className="w-full border border-gray-300 p-2 rounded" />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[rgb(141,72,23)]  text-white px-6 py-2 rounded hover:bg-[rgb(207,157,122)] focus:outline-none focus:ring "
              >
                Add Jewelry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJewellery;
