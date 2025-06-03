import Allproducts from "../components/AllProducts"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewArrival from "../components/NewArrival"
import Support from "../components/Support"
import Top_Header from "../components/Top_Header"


const Home = () => {
  return (
    <div>
        <Top_Header/>
        <Navbar/>
        <Banner/>
        <NewArrival/>
        <Support/>
       <Footer/>
       
    </div>
  )
}

export default Home
