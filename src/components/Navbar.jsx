import { Link, NavLink } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

// const menus = [
//     {
//         id: 1,
//         link: "/",
//         text: "Home"
//     },
//     {
//         id: 2,
//         link: "/contact",
//         text: "Contact"
//     },
//     {
//         id: 3,
//         link: "/about",
//         text: "About"
//     },
//     {
//         id: 4,
//         link: "/sign_up",
//         text: "Sign_up"
//     },
// ]

const ActiveStyle = ({ isActive }) => {
    return isActive 
      ? "text-[16px] leading-[24px] text-red-500 relative group " 
      : "text-[16px] leading-[24px] text-black hover:text-blue-300 relative group ";
  };

const Navbar = () => {
    return (
        <nav className='pt-[47px] pb-[27px] border-b border-b-[rgba(0,0,0,0.40)]'>
            <div className="container">
                <div className='grid grid-cols-[1fr_auto_1fr] justify-center items-center '>
                    <div className='mr-[182px]'>
                        <img className='h-[24px] w-[124px] ' src="logo.png" alt="" />
                    </div>
                    <ul className='flex gap-[30px]'>
                        <NavLink to={"/"} className={ActiveStyle}>Home</NavLink>
                        <NavLink to={"/contact"} className={ActiveStyle}>Contact</NavLink>
                        <NavLink to={"/about"} className={ActiveStyle}>About</NavLink>
                        <NavLink to={"/sign_up"} className={ActiveStyle}>Sign Up</NavLink>
                    </ul>
                    <div className='flex gap-[20px]'>
                        <form className='ml-[128px] flex' action="">
                            <div className="relative">
                                <input
                                    className='w-[243px] bg-[#fafafa] py-[10px] pl-[20px] pr-[40px] font-Poppins font-normal text-[12px]'
                                    type="text"
                                    placeholder='What are you looking for?'
                                />
                                <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-[24px] cursor-pointer" />
                            </div>
                        </form>
                        <div className="flex justify-center items-center gap-[17px]">
                            <span className='text-[20px] cursor-pointer'><GoHeart /></span>
                            <span className='text-[20px] cursor-pointer'><IoCartOutline /></span>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar