import React from 'react'
import img_1 from '../assets/scan.png'

const Footer = () => {
    return (
        <footer className='bg-black py-[80px] px-[80px]'>
            <div className='container'>
                <div className='grid grid-cols-[271px_170px_118px_100px_200px] gap-[95px] '>
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
                            <ItemHeading text={"Support"}/>
                            <Items className="leading-[30px]" text={"111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."}/>
                            <Items text={"exclusive@gmail.com"}/>
                            <Items text={"+88015-88888-9999"}/>
                        </ul>
                    </div>
                    <div>
                         <ul className='flex flex-col gap-[22px]'>
                            <ItemHeading text={"Account"}/>
                            <Items className="leading-[30px]" text={"My Account"}/>
                            <Items text={"Login / Register"}/>
                            <Items text={"Cart"}/>
                            <Items text={"Wishlist"}/>
                            <Items text={"Shop"}/>
                        </ul>
                    </div>
                    <div>
                         <ul className='flex flex-col gap-[22px]'>
                            <ItemHeading text={"Quick Link"}/>
                            <Items className="leading-[30px]" text={"Privacy Policy"}/>
                            <Items text={"Terms Of Use"}/>
                            <Items text={"FAQ"}/>
                            <Items text={"Contact"}/>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <ItemHeading text={"Download App"}/>
                        </ul>
                        <h6 className='font-Poppins font-medium text-[12px] leading-[18px] text-gray-300 mt-[20px]'>Save $3 with App New User Only</h6>
                    </div>
                    <div>
                        <div class="flex gap-[7px] border-[1px] border-gray-200 w-[200px] pr-[0px] rounded-[5px] pl-[10px] pt-[2px] pb-[4px] h-[57px] mt-[100px]" href="#">
                 <a class="">
                  <svg class="mt-[10px] lp-mobile-badge__content__icon fill-[#fff] w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23" aria-hidden="true"><path d="m12.88 5.97.28.02c1.6.05 3.08.85 4 2.16a4.95 4.95 0 0 0-2.36 4.15 4.78 4.78 0 0 0 2.92 4.4 10.96 10.96 0 0 1-1.52 3.1c-.9 1.33-1.83 2.64-3.32 2.66-1.45.04-1.94-.85-3.6-.85-1.67 0-2.19.83-3.57.89-1.42.05-2.5-1.43-3.43-2.76-1.85-2.7-3.3-7.63-1.36-10.97a5.32 5.32 0 0 1 4.47-2.73C6.81 6 8.13 7 9 7c.86 0 2.48-1.18 4.16-1zm.3-5.25a4.87 4.87 0 0 1-1.11 3.49 4.1 4.1 0 0 1-3.24 1.53 4.64 4.64 0 0 1 1.14-3.36A4.96 4.96 0 0 1 13.18.72z"></path></svg>
                 </a>
                 <a>
                  <div class="flex flex-col  leading-0">
                    <span><a  class="text-white leading-0 mt-[15px] mb-[5px] hover:text-[#ffffffd9] font-[600] text-[13px]" href="#">Download on the</a></span>
                    <h3><a class="text-white font-[700] text-[26px] hover:text-[#ffffffd9]" href="#">App Store</a></h3>
                  </div>
                 </a>
                </div>  
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