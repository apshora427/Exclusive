import SectionHead from './SectionHead'
import AllProducts from './AllProducts'
import img_1 from '../assets/S-1.png'
import img_2 from '../assets/S-2.png'
import img_3 from '../assets/S-3.png'
import img_4 from '../assets/S-4.png'
import MainButton from './MainButton'

const SellingProduct = () => {
  return (
    <section className='mb-[140px]'>
        <div className="container">
            <div>
              <div className='flex justify-between'>
                <SectionHead text={'This Month'} para={'Best Selling Products'}/>
                <MainButton text={'View All'} className={'bg-Button2 text-white h-[56px] mt-[30px]'}/>
            </div>
            <div className='grid grid-cols-4 gap-[30px]'>
              <AllProducts img={img_1} heading={'The north coat'} price={'$260'} originalPrice={'$360'} rate={'(65)'}/>
              <AllProducts img={img_2} heading={'Gucci duffle bag'} price={'$960'} originalPrice={'$1160'} rate={'(65)'}/>
              <AllProducts img={img_3} heading={'RGB liquid CPU Cooler'} price={'$160'} originalPrice={'$170'} rate={'(65)'}/>
              <AllProducts img={img_4} heading={'Small BookSelf'} price={'$360'} originalPrice={'$460'} rate={'(65)'}/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SellingProduct