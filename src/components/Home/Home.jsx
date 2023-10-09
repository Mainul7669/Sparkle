import Banner from "../Banner/Banner";
import FirstProduct from "../FirstProduct/FirstProduct";
import Discount from "../Discount/Discount";
import SecondProduct from "../SecondProduct/SecondProduct";
import SecondBanner from "../SecondBanner/SecondBanner";
import Testimonial from "../Testimonial/Testimonial";
import SubscribeBanner from "../SubscribeBanner/SubscribeBanner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FirstProduct/>
      <Discount/>
      <SecondProduct/>
      <Discount/>
      <SecondBanner/>
      <Testimonial/>
      <SubscribeBanner/>
    </div>
  );
};

export default Home;
