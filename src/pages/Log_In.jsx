import Button from "../components/Button"
import Input from "../components/Input"
import Navbar from "../components/Navbar"
import Top_Header from "../components/Top_Header"
import Sign_UP_Image from "../assets/sign_up.png"
import { UseUser } from "../context/UserContext"
import { useState } from "react"

const Log_In = () => {
  const { LogInUser } = UseUser()
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target

    setNewUser({ ...newUser, [name]: value })

  }
  const handleLogIn = (e) => {
    e.preventDefault()
      LogInUser(newUser.email, newUser.password)
  }
  return (
    <section>
      <Top_Header />
      <Navbar />
      <div className="grid grid-cols-[5fr_5fr] mt-[60px]">
        <div>
          <img className="w-full" src={Sign_UP_Image} alt="image" />
        </div>
        <div className="py-[125px] px-10 lg:px-[128px]">
          <h3 className="font-Inter font-medium text-[36px] leading-[30px] tracking-[4%]">Log in to Exclusive</h3>
          <p className="font-Poppins font-normal text-[16px] mt-[24px] mb-[48px]">Enter your details below</p>
          <form action="" className="grid grid-cols-1 gap-5">
            <Input onChange={(e) => handleChange(e)}
              type="email" placeholder='Email or Phone Number' value={newUser.email} name='email' />
            <Input onChange={(e) => handleChange(e)}
              type="password" placeholder='Password' value={newUser.password} name='password' />
            <div className="w-[400px] mt-[40px] flex  items-center gap-[100px]">
              <Button onClick={handleLogIn} TagName={"button"} className="w-[143px]">Log in</Button>
              <button className="text-red-400">Forget Password?</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Log_In