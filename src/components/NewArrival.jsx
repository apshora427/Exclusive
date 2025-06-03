import img_1 from '../assets/bannerItem_3.png'
import img_2 from '../assets/PS5.png'
import img_3 from '../assets/Gucci.png'
import img_4 from '../assets/speakers.png'
import SectionHead from './SectionHead';

const NewArrival = () => { 
  const data = [
    {
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: img_2,
      link: '#',
    },
    {
      title: 'Women’s Collections',
      description: 'Featured woman collections that give you another vibe.',
      image: img_1,
      link: '#',
    },
    {
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      image: img_4,
      link: '#',
    },
    {
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      image: img_3,
      link: '#',
    },
  ];

  return (
    <section>
      <div className="container">
        <div>
          <SectionHead text={"Featured"} para={"New Arrival"} />
          <div className='grid grid-cols-[500px_600px] gap-[30px]'>
            {/* {data?.map((item, idx) => (
          <PromoCard key={idx} {...item} />
        ))} */}
            <div className="relative rounded-lg overflow-hidden shadow-md group bg-black h-[] pt-[100px] w-[500px]">
              <img src={img_2} alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-[35px] pl-[32px]  text-white">
                <h2 className="text-[24px] font-Inter font-semibold">PlayStation 5</h2>
                <p className="text-[12px] font-Inter font-normal w-[222px] my-[16px]">Black and White version of the PS5 coming out on sale.</p>
                <a href="#" className="mt-2 text-sm underline hover:opacity-80">Shop Now</a>
              </div>
            </div>
           <div className='flex flex-col '>
             <div className="relative rounded-lg overflow-hidden shadow-md group bg-black h-[] w-[600px] h-[350px] pt-[50px]">
              <img src={img_1} alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-[35px] pl-[32px]  text-white mr-[70px]">
                <h2 className="text-[24px] font-Inter font-semibold">Women’s Collections</h2>
                <p className="text-[12px] font-Inter font-normal w-[190px] my-[16px]">Featured woman collections that give you another vibe.</p>
                <a href="#" className="mt-2 text-sm underline hover:opacity-80">Shop Now</a>
              </div>
            </div>
            <div className='grid grid-cols-2'>
               <div className="relative rounded-lg overflow-hidden shadow-md group bg-black h-[] w-[270px] h-[350px] pt-[50px]">
              <img src={img_4} alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-[35px] pl-[32px]  text-white mr-[70px]">
                <h2 className="text-[24px] font-Inter font-semibold">Women’s Collections</h2>
                <p className="text-[12px] font-Inter font-normal w-[190px] my-[16px]">Featured woman collections that give you another vibe.</p>
                <a href="#" className="mt-2 text-sm underline hover:opacity-80">Shop Now</a>
              </div>
            </div> 
            <div className="relative rounded-lg overflow-hidden shadow-md group bg-black h-[] w-[270px] h-[350px] pt-[50px]">
              <img src={img_3} alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-[35px] pl-[32px]  text-white mr-[70px]">
                <h2 className="text-[24px] font-Inter font-semibold">Women’s Collections</h2>
                <p className="text-[12px] font-Inter font-normal w-[190px] my-[16px]">Featured woman collections that give you another vibe.</p>
                <a href="#" className="mt-2 text-sm underline hover:opacity-80">Shop Now</a>
              </div>
            </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

const PromoCard = ({ title, description, image, link }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group">
      <img src={image} alt={title} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
        <a href={link} className="mt-2 text-sm underline hover:opacity-80">Shop Now</a>
      </div>
    </div>
  );
};

