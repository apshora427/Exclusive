
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Top_Header = () => {
    return (
        <section className='bg-black'>
            <div className='container'>
                <div className='py-[15px] flex'>
                    <h3 className='text-white font-Poppins text-[14px] font-normal mx-auto'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span className='text-white ml-[8px] font-semibold font-Poppins text-[14px] underline'><a href="#">ShopNow</a></span>
                    </h3>
                    <div className="flex justify-center items-center gap-[2px] cursor-pointer">
                        <h4 className='text-white font-Poppins font-normal text-[14px]'>English</h4>
                        <span className="text-white text-[24px]"><MdOutlineKeyboardArrowDown /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Top_Header