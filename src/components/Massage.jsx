import MainButton from "./MainButton"


const Massage = () => {
    return (
        <section className='my-[140px]'>
            <div className="container">
                <div className='grid grid-cols-[340px_1fr] gap-[20px]'>
                    <div className='shadow-[0_20px_50px_rgba(0,0,0,0.1)] pt-[40px] pb-[50px] px-[35px]'>
                        <div className='flex flex-col  border-b border-b-[rgba(0,0,0,0.40)]'>
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
                        <div className='flex flex-col mt-[32px]'>
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
                    <form className='shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-[40px] px-[32px] flex flex-col relative' action="">
                        <div className='flex gap-[16px]'>
                            <Input type={"text"} placeholder={"Your Name *"}/>
                            <Input type={"email"} placeholder={"Your Email *"}/>
                            <Input type={"text"} placeholder={"Your Phone *"}/>
                        </div>
                        <div className='my-[32px]'>
                            <Input type={"text"} placeholder={"Your Massage"} className={"w-[740px] h-[207px]"}/>
                        </div>
                        <div className="absolute right-[32px] bottom-[40px]">
                            <MainButton text={"Send Massage"} className={"bg-Button2 text-white"}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Massage

const Input = ({type, placeholder, className}) => {
    return <input type={type} className={`w-[235px] bg-[#fafafa] py-[13px] px-[16px] text-[16px] font-Poppins font-normal leading-[24px] ${className}`} placeholder={placeholder}/>
}