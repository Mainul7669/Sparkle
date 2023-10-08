import Banner from "../Banner/Banner";
import FirstProduct from "../FirstProduct/FirstProduct";
import Discount from "../Discount/Discount";
import SecondProduct from "../SecondProduct/SecondProduct";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FirstProduct/>
      <Discount/>
      <SecondProduct/>
      <Discount/>
    </div>
  );
};

export default Home;
