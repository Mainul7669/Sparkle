
const Discount = () => {
    return (
        <div>
           <div className="flex flex-col items-center justify-center gap-4 mb-4 sm:flex-row">
           <div className="flex items-center gap-4 border-dotted border-2 border-red-600 rounded-xl bg-[#FFF5F5] lg:px-10 lg:py-5 p-4 lg:mx-0 mx-4">
            <h2 className="text-red-500 text-md font-bold">Super discount for your first purchase</h2>
            <h3 className="text-white bg-red-600 px-3 py-2 rounded-3xl font-semibold font-mono">FIRST250</h3>
            <h4 className="text-black text-md font-semibold">Use discount code in checkout page.</h4>
            </div>
            <div className="flex items-center gap-4 border-dotted border-2 border-[#FDDF80] rounded-xl bg-[#FEF8E5] lg:px-10 lg:py-5 p-4 lg:mx-0 mx-4">
            <h2 className="text-black text-md font-bold">2nd shopping surprise campaign!</h2>
            <h3 className="text-white bg-[rgb(250,194,19)] px-4 py-2 rounded-3xl font-semibold font-mono text-center">Check Products</h3>
            </div>
           </div>
        </div>
    );
};

export default Discount;