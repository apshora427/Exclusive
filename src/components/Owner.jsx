import { CiTwitter } from 'react-icons/ci'
import img_1 from '../assets/Owner_1.png'
import img_2 from '../assets/Owner_2.png'
import img_3 from '../assets/Owner_3.png'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Slider from "react-slick";

const card_items = [
    {
        id: 1,
        img: img_1,
        name: 'Tom Cruise',
        position: 'Founder & Chairman',
    },
    {
        id: 2,
        img: img_2,
        name: 'Emma Watson',
        position: 'Managing Director',
    },
    {
        id: 3,
        img: img_3,
        name: 'Will Smith',
        position: 'Product Designer',
    },

]

const Owner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <section id='Owner'>
            <div className="container">
                <div className='mb-[140px]'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {card_items?.map((items) => {
                                return <Card id={items.id} name={items.name} img={items.img} position={items.position} />
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Owner

const Card = ({ img, position, name }) => {
    return (
        <div>
            <div className='bg-[#f5f5f5] flex justify-center pt-[67px] px-[40px] h-[400px] w-[350px]'>
                <img src={img} alt="" />
            </div>
            <div className='mt-[32px]'>
                <h5 className='font-Inter font-medium text-[32px] leading-[30px]'>{name}</h5>
                <h6 className='font-Poppins font-normal text-[16px] leading-[24px] mt-[8px] mb-[16px]'>{position}</h6>
            </div>
            <ul className='flex gap-[24px] items-center'>
                <li className=' text-[20px]'><CiTwitter /></li>
                <li className=' text-[20px]'><FaInstagram /></li>
                <li className=' text-[20px]'><FaLinkedinIn /></li>
            </ul>
        </div>
    )
}