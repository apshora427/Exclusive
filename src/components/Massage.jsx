import React from 'react'

const Massage = () => {
  return (
    <section>
        <div className="container">
            <div>
                <div className='flex flex-col'>
                    <div className='flex gap-[20px] items-center'>
                        <div className='size-[40px] bg-Button2 rounded-full flex justify-center items-center'>
                            <img src="call.png" alt="" />
                        </div>
                        <h5 className='font-Poppins font-medium text-[16px] leading-[24px]'>Call To Us</h5>
                    </div>
                    <div>
                        <p className='font-Poppins font-normal text-[14px] leading-[21px] mt-[24px] mb-[16px]'>We are available 24/7, 7 days a week.</p>
                        <p className='font-Poppins font-normal text-[14px] leading-[21px] mb-[32px]'>Phone: +8801611112222</p>
                    </div>
                </div> 
                <div className='flex flex-col'>
                    <div className='flex gap-[20px] items-center'>
                        <div className='size-[40px] bg-Button2 rounded-full flex justify-center items-center'>
                            <img src="email.png" alt="" />
                        </div>
                        <h5 className='font-Poppins font-medium text-[16px] leading-[24px]'>Write To US</h5>
                    </div>
                    <div>
                        <p className='font-Poppins font-normal text-[14px] leading-[21px] mt-[24px] mb-[16px]'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='font-Poppins font-normal text-[14px] leading-[21px] mb-[16px]'>Emails: customer@exclusive.com</p>
                        <p className='font-Poppins font-normal text-[14px] leading-[21px] mb-[32px]'>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Massage