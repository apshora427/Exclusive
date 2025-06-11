import img_1 from '../assets/bannerItem_3.png'
import img_2 from '../assets/PS5.png'
import img_3 from '../assets/Gucci.png'
import img_4 from '../assets/speakers.png'
import SectionHead from './SectionHead';

const NewArrival = () => {
 
  return (
    <section>
      <div className="container mt-[178px]">
         <SectionHead text={"Featured"} para={"New Arrival"}/>
          <div className='grid grid-cols-[500px_600px] gap-[30px]'>
            <PromoCard title={"PlayStation 5"} description={"Black and White version of the PS5 coming out on sale."} image={img_2} className={'pt-[100px] w-[500px]'} />
            <div className='flex flex-col'>
              <PromoCard title={"Women’s Collections"} description={"Featured woman collections that give you another vibe."} image={img_1} className={'w-[605px] h-[350px] pt-[50px] mb-[32px]'} details={'absolute right-0'} />
              <div className='grid grid-cols-2 gap-5'>
                <PromoCard title={"Speakers"} description={"Amazon wireless speakers"} image={img_4} className={' h-[280px] pt-[50px] w-[295px]'} details={'absolute right-[20%]'}/>
                <PromoCard title={"Perfume"} description={"GUCCI INTENSE OUD EDP"} image={img_3} className={' h-[280px] pt-[50px] w-[295px]'} details={'absolute right-[20%]'}/>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default NewArrival;

const PromoCard = ({ title, description, image, className, details }) => {
  return (
    <div className={`relative overflow-hidden shadow-md group bg-black cursor-pointer  ${className}`}>
      <img src={image} alt={title} className={` object-cover transition duration-300 group-hover:scale-105 ${details}`} />
      <div className="absolute bottom-[35px] pl-[32px]  text-white mr-[70px]">
        <h2 className="text-[24px] font-Inter font-semibold">{title}</h2>
        <p className="text-[12px] font-Inter font-normal w-[190px] my-[16px]">{description}</p>
        <a href='#' className="mt-2 text-sm underline hover:opacity-80 cursor-pointer">Shop Now</a>
      </div>
    </div>
  );
};

