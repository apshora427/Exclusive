import Navbar from "../components/Navbar"
import Top_Header from "../components/Top_Header"
import Sign_Up_Image from "../assets/sign_up.png"
import Input from "../components/Input"
import Button from "../components/Button"
import OutlineButton from "../components/OutlineButton"
import { Link } from "react-router"
import { useState } from "react"
import { UseUser } from "../context/UserContext"




const Sign_Up = () => {
  const { currentUser, addUser, googleSignUp } = UseUser()


  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSignUp = (e) => {
    e.preventDefault();
    addUser(newUser.name, newUser.email, newUser.password)
    console.log(currentUser);

  }
  const handleChange = (e) => setNewUser({ ...newUser, [e.target.name]: e.target.value })
  return (
    <section>
      <Top_Header />
      <Navbar />
      <div className="grid grid-cols-[5fr_5fr] mt-[60px]">
        <div>
          <img src={Sign_Up_Image} alt="image" />
        </div>
        <div className="py-[125px] px-10 lg:px-[128px]">
          <h2 className="font-Inter font-medium text-[36px] leading-[30px] tracking-[4%]">Create an account</h2>
          <p className="font-Poppins font-normal text-[16px] mt-[24px] mb-[48px]">Enter your details below</p>

          <form action="" className="grid grid-cols-1 gap-5">
            <Input
              onChange={(e) => handleChange(e)}
              value={newUser.name} type="text" placeholder='Name' name='name' />

            <Input onChange={(e) => handleChange(e)}
              type="email" placeholder='Email or Phone Number' value={newUser.email} name='email' />

            <Input onChange={(e) => handleChange(e)}
              type="password" placeholder='Password' value={newUser.password} name='password' />


            <Button
              className="w-[400px]"
              TagName={"button"}
              type="submit"
              onClick={handleSignUp}
            >
              Create Account
            </Button>

            <OutlineButton onClick={()=> googleSignUp()} TagName={"button"} className="w-[400px]">
              <img src="Google.png" alt="icon" />
              Sign up with Google
            </OutlineButton>
            <div className="flex  justify-center gap-[16px] items-center px-[86px] w-[400px] rounded-[4px] leading-[56px] bg-transparent text-black cursor-pointer">
              <p className="font-Poppins text-[16px] font-normal">Already have account? <Link to="/login">Log in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sign_Up