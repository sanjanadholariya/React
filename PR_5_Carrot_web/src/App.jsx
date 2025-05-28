import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import DiscountProduct from './DiscountProduct/DiscountProduct';
import PopularProducts from './PopularProducts/PopularProducts';
import Slider from './Slider/Slider';
import Deal from './Deal/Deal';
import Organic from './Organic/Organic';
import Review from './Review/Review';
import Latest from './Latest/Latest';
import Footer from './Footer/Footer';
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <DiscountProduct/>
      <PopularProducts/>
      <Slider/>
      <Deal/>
      <Organic/>
      <Review/>
      <Latest/>
      <Footer/>
    </>
  )
}

export default App
