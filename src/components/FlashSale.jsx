import React, { useRef } from 'react';
import SectionHead from './SectionHead';
import Clock from './Clock';
import img_1 from '../assets/F-1.png';
import img_2 from '../assets/F-2.png';
import img_3 from '../assets/F-3.png';
import img_4 from '../assets/F-4.png';
import AllProducts from './AllProducts';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FlashSale = () => {
  const targetDate = '2025-06-15T00:00:00';
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,  // Disable default arrows because we’ll use custom ones
  };

  return (
    <section>
      <div className="container">
        <div className='mt-[140px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <SectionHead text={'Today’s'} para={'Flash Sales'} />
              <Clock targetDate={targetDate} />
            </div>
            <div className='flex gap-4'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="p-2 bg-[#F5F5F5] rounded-full size-[46px] cursor-pointer hover:bg-gray-300 transition flex justify-center items-center"
                aria-label="Previous Slide"
              >
               <FaArrowLeft />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="p-2 bg-[#F5F5F5] rounded-full size-[46px] cursor-pointer hover:bg-gray-300 transition flex justify-center items-center"
                aria-label="Next Slide"
              >
               <FaArrowRight />

              </button>
            </div>
          </div>

          <div className="slider-container mt-6 gap-[30px]">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <AllProducts
                  img={img_1}
                  sale={"-40%"}
                  heading={"HAVIT HV-G92 Gamepad"}
                  price={"$120"}
                  originalPrice={"$160"}
                  rate={"(88)"}
                />
              </div>
              <div>
                <AllProducts
                  className={'mt-[70px]'}
                  img={img_2}
                  sale={"-35%"}
                  heading={"AK-900 Wired Keyboard"}
                  price={"$960"}
                  originalPrice={"$1160"}
                  rate={"(75)"}
                />
              </div>
              <div>
                <AllProducts
                  img={img_3}
                  sale={"-30%"}
                  heading={"IPS LCD Gaming Monitor"}
                  price={"$370"}
                  originalPrice={"$400"}
                  rate={"(99)"}
                />
              </div>
              <div>
                <AllProducts
                  img={img_4}
                  sale={"-25%"}
                  heading={"S-Series Comfort Chair "}
                  price={"$375"}
                  originalPrice={"$400"}
                  rate={"(99)"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
