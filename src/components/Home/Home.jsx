import Banner from "../Banner/Banner";
import FirstProduct from "../FirstProduct/FirstProduct";
import Discount from "../Discount/Discount";
import SecondProduct from "../SecondProduct/SecondProduct";
import SecondBanner from "../SecondBanner/SecondBanner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FirstProduct/>
      <Discount/>
      <SecondProduct/>
      <Discount/>
      <SecondBanner/>
    </div>
  );
};

export default Home;
