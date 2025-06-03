import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black py-[80px] px-[80px]'>
            <div className='container'>
                <div className='grid grid-cols-[271px_170px_118px_100px] gap-[95px] '>
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
                        <ItemHeading text={"Download App"}/>
                        <span>Save $3 with App New User Only</span>
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