import img_1 from '../assets/about.png'
const OurStory = () => {
  return (
    <section>
        <div className='grid grid-cols-2 gap-[120px]'>
              <div className="container">
                <div className='mt-[280px] ml-[135px]'>
                    <h2 className='font-Inter font-semibold text-[54px] leading-[64px] text-black'>Our Story</h2>
                    <p className='mt-[40px] mb-[24px] font-Poppins font-normal text-[17px] leading-[26px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='font-Poppins font-normal text-[17px] leading-[26px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
            </div>
            <div className='mt-[145px]'>
                <img src={img_1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default OurStory