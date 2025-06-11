import CountdownTimer from './CountDownTimer'
import MainButton from './MainButton'
import img from '../assets/bannerItem_2.png'

const Catergories = () => {
  return (
    <section>
        <div className="container">
            <div className='grid grid-cols-2 bg-black py-[69px] px-[56px] items-center'>
               <div>
                 <h6 className='font-Poppins font-semibold text-[16px] leading-[20px] text-Button1'>Categories</h6>
                 <h2 className="font-Inter font-semibold text-[48px] leading-[60px] text-white my-[32px]">
                    Enhance Your Music Experience
                </h2>
                <CountdownTimer/>
                <MainButton text={"Buy Now!"} className={"text-white bg-Button1 mt-[40px]"}/>
               </div>
               <div>
                <img src={img} className="drop-shadow-[0_0_50px_rgba(255,255,255,0.35)]" alt="" />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Catergories