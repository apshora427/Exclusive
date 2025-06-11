import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OurStory from "../components/OurStory"
import Owner from "../components/Owner"
import Story_Info from "../components/Story_Info"
import Support from "../components/Support"
import Top_Header from "../components/Top_Header"


const About = () => {
  return (
    <div>
      <Top_Header/>
      <Navbar/>
      <OurStory/>
      <Story_Info/>
      <Owner/>
      <Support/>
      <Footer/>
    </div> 
  )
}

export default About