import Allproducts from "../components/AllProducts"
import Banner from "../components/Banner"
import Browse from "../components/Browse"
import Catergories from "../components/Catergories"
import CountdownTimer from "../components/CountDownTimer"
import ExploreProducts from "../components/ExploreProducts"
import FlashSale from "../components/FlashSale"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewArrival from "../components/NewArrival"
import SellingProduct from "../components/SellingProduct"
import Support from "../components/Support"
import Top_Header from "../components/Top_Header"


const Home = () => {
  return (
    <div>
        <Top_Header/>
        <Navbar/>
        <Banner/>
        <FlashSale/>
        <Browse/>
        <SellingProduct/>
        <Catergories/>
        <ExploreProducts/>
        <NewArrival/>
        <Support/>
       <Footer/>
    </div>
  )
}

export default Home
