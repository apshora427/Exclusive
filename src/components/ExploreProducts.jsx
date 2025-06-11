import img_1 from '../assets/E-1.png'
import img_2 from '../assets/E-2.png'
import img_3 from '../assets/E-3.png'
import img_4 from '../assets/E-4.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef } from 'react';
import Slider from "react-slick";
import SectionHead from './SectionHead';
import AllProducts from './AllProducts';



const ExploreProducts = () => {
     const sliderRef = useRef(null);
    
      const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,  
      };
  return (
     <section>
      <div className="container">
        <div className='mt-[140px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <SectionHead text={'Our Products'} para={'Explore Our Products'} />
             
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
                  heading={"Breed Dry Dog Food"}
                  price={"$120"}
                  rate={"(88)"}
                />
              </div>
              <div>
                <AllProducts
                  className={'mt-[70px]'}
                  img={img_2}
                  heading={"CANON EOS DSLR Camera"}
                  price={"$960"}
                  rate={"(75)"}
                />
              </div>
              <div>
                <AllProducts
                  img={img_3}
                  heading={"ASUS FHD Gaming Laptop"}
                  price={"$370"}
                  rate={"(99)"}
                />
              </div>
              <div>
                <AllProducts
                  img={img_4}
                  heading={"Curology Product Set "}
                  price={"$375"}
                  rate={"(99)"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreProducts