import { FaGreaterThan, FaLongArrowAltRight } from "react-icons/fa"
import img_1 from "../assets/bannerItem_1.jpg"
import img_2 from "../assets/bannerItem_2.png"
import img_3 from "../assets/bannerItem_3.png"
import { IoChevronForward } from "react-icons/io5"
import Slider from "react-slick";


const menuItems = [
    {
        id: 1,
        text: "Woman’s Fashion",
        icon: true
    },
    {
        id: 2,
        text: "Men’s Fashion",
        icon: true
    },
    {
        id: 3,
        text: "Electronics",
        icon: null
    },
    {
        id: 4,
        text: "Home & Lifestyle",
        icon: null
    },
    {
        id: 5,
        text: "Medicine",
        icon: null
    },
    {
        id: 6,
        text: "Sports & Outdoor",
        icon: null
    },
    {
        id: 7,
        text: "Baby’s & Toys",
        icon: null
    },
    {
        id: 8,
        text: "Groceries &  ",
        icon: null
    },
    {
        id: 9,
        text: "Health & Beauty",
        icon: null
    },
]
const bannerItem = [
    {
        id: 1,
        img: img_1,
        icon: true,
        brand: "iPhone 14 Series",
        h3: "Up to 10% off Voucher",
    },
    {
        id: 2,
        img: img_2,
        icon: null,
        brand: "Categories",
        h3: "Enhance Your Music Experience",
    },
    {
        id: 3,
        img: img_3,
        icon: null,
        brand: "Women’s Collections",
        h3: "Featured woman collections",
    },
]

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <section id="banner" className="mt-[40px]">
            <div className="container">
                <div className="grid grid-cols-[217px_1fr]">
                    <div>
                        <ul className="flex flex-col gap-[20px]">
                            {menuItems?.map((items) => (
                                <Menu id={items.id} icon={items.icon} text={items.text} />
                            )
                            )}
                        </ul>
                    </div>
                    <div>

                        <div className="slider-container w-[892px] h-[394px]">
                            <Slider {...settings}>
                                {bannerItem?.map((item) => (
                                    <BannerItem key={item.id} bannerItem={item} />
                                ))}
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner

const Menu = ({ text, icon }) => {
    return (
        <li className="font-Poppins font-normal text-[16px] leading-[24px] text-black flex items-center gap-[50px] cursor-pointer">
            <a href="#">{text}</a>
            {icon ? <IoChevronForward /> : null}
        </li>
    )
}

const BannerItem = ({ bannerItem }) => {
    return (
        <div
            className="bg-black pt-[58px] px-[64px] h-[380px]"
            style={{
                backgroundImage: `url(${bannerItem.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex gap-[16px] items-center">
                {bannerItem.icon ? <img src="apple.png" alt="" /> : null}

                <h6 className="font-Poppins font-normal text-white text-[16px] leading-[24px]">
                    {bannerItem.brand}
                </h6>
            </div>
            <h3 className="font-Inter font-semibold text-[48px] leading-[60px] text-white w-[294px] mt-[20px] mb-[22px]">
                {bannerItem.h3}
            </h3>
            <div className="flex items-center gap-2">
                <button className="text-[16px] leading-[24px] font-medium text-white">
                    Shop Now
                </button>
                <span>
                    <FaLongArrowAltRight className="text-white"/>
                </span>
            </div>
        </div>
    );
};
