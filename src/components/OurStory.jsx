import img_1 from '../assets/about.png'
const OurStory = () => {
  return (
    <section>
        <div className='grid grid-cols-2 gap-[50px]'>
              <div className="container">
                <div>
                    <h2 className='font-Inter font-semibold text-[54px] leading-[64px] text-black'>Our Story</h2>
                    <p className='mt-[40px] mb-[24px] font-Poppins font-normal text-[16px] leading-[18px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='font-Poppins font-normal text-[16px] leading-[18px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
            </div>
            <div>
                <img src={img_1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default OurStory