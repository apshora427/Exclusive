import Button from "../components/Button"
import Input from "../components/Input"
import Navbar from "../components/Navbar"
import Top_Header from "../components/Top_Header"
import Sign_UP_Image from "../assets/sign_up.png"

const Log_In = () => {
  return (
     <section>
        <Top_Header/>
        <Navbar/>
        <div className="grid grid-cols-[5fr_5fr] mt-[60px]">
            <div>
                <img className="w-full" src={Sign_UP_Image} alt="image" />
            </div>
            <div className="py-[125px] px-10 lg:px-[128px]">
                <h3 className="font-Inter font-medium text-[36px] leading-[30px] tracking-[4%]">Log in to Exclusive</h3>
                 <p className="font-Poppins font-normal text-[16px] mt-[24px] mb-[48px]">Enter your details below</p>
                <form action="" className="grid grid-cols-1 gap-5">
                    <Input type="text" placeholder='Email or Phone Number' />
                    <Input type="text" placeholder='Password' />
                   <div className="w-[400px] mt-[40px] flex  items-center gap-[100px]">
                     <Button TagName={"button"} className="w-[143px]">Log in</Button>
                    <button className="text-red-400">Forget Password?</button>
                   </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Log_In