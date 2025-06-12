import img_1 from '../assets/scan.png'
import img_2 from '../assets/GooglePlay.png'
import img_3 from '../assets/AppStore.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
    return (
        <footer className='bg-black py-[80px] px-[80px]'>
            <div className='container'>
                <div className='grid grid-cols-[271px_170px_118px_100px_200px] gap-[75px] '>
                    <div className=''>
                        <img className='pb-[24px]' src="logo_2.png" alt="" />
                        <ul className='flex flex-col gap-[24px] mb-[24px]'>
                            <ItemHeading text={"Subscribe"} />
                            <Items text={"Get 10% off your first order"} />
                        </ul>
                        <form action="" className="relative w-[230px]">
                            <input
                                className="text-white py-[12px] pr-[40px] pl-[16px] w-full rounded-md  border-2 border-white"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <img
                                src="arrow.png"
                                alt="arrow"
                                className="absolute right-[12px] top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] cursor-pointer"
                            />
                        </form>
                    </div>
                    <div className=''>
                        <ul className='flex flex-col gap-[22px]'>
                            <ItemHeading text={"Support"} />
                            <Items className="leading-[30px]" text={"111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."} />
                            <Items text={"exclusive@gmail.com"} />
                            <Items text={"+88015-88888-9999"} />
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[22px]'>
                            <ItemHeading text={"Account"} />
                            <Items className="leading-[30px]" text={"My Account"} />
                            <Items text={"Login / Register"} />
                            <Items text={"Cart"} />
                            <Items text={"Wishlist"} />
                            <Items text={"Shop"} />
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[22px]'>
                            <ItemHeading text={"Quick Link"} />
                            <Items className="leading-[30px]" text={"Privacy Policy"} />
                            <Items text={"Terms Of Use"} />
                            <Items text={"FAQ"} />
                            <Items text={"Contact"} />
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <ItemHeading text={"Download App"} />
                        </ul>
                        <h6 className='font-Poppins font-medium text-[12px] leading-[18px] text-gray-300 mt-[20px]'>Save $3 with App New User Only</h6>
                        <div className='grid grid-cols-[4fr_6fr] gap-[10px] items-center mt-[8px]'>
                            <div>
                                <img className='size-[80px]' src={img_1} alt="" />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <div>
                                    <img src={img_2} alt="" />
                                </div>
                                <div>
                                    <img src={img_3} alt="" />
                                </div>
                            </div>
                        </div>
                       <ul className='flex gap-[24px] mt-[24px]'>
                        <li className='text-white text-[20px]'><FaFacebookF /></li> 
                        <li className='text-white text-[20px]'><CiTwitter /></li> 
                        <li className='text-white text-[20px]'><FaInstagram /></li> 
                        <li className='text-white text-[20px]'><FaLinkedinIn /></li>
                       </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer

const ItemHeading = ({ text }) => {
    return (
        <li className='font-Poppins font-normal text-[20px] leading-[28px] text-white'><a href="#">{text}</a></li>
    )
}
const Items = ({ text }) => {
    return (
        <li className='font-Poppins font-normal text-[14px] leading-[20px] text-white'><a href="#">{text}</a></li>
    )
}