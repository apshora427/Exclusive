
import img_1 from '../assets/icon-delivery (1).png'
import img_2 from '../assets/vector_2.png'
import img_3 from '../assets/vector_3.png'


const items = [
    {
        id: 1,
        img: img_1,
        Heading: 'FREE AND FAST DELIVERY',
        text: 'Free delivery for all orders over $140'
    },
    {
        id: 2,
        img: img_2,
        Heading: '24/7 CUSTOMER SERVICE',
        text: 'Friendly 24/7 customer support'
    },
    {
        id: 3,
        img: img_3,
        Heading: 'MONEY BACK GUARANTEE',
        text: 'We reurn money within 30 days'
    },
]

const Support = () => {
    return (
        <section className='pt-[140px] pb-[221px]'>
            <div className="container">
                <div className="grid grid-cols-3 gap-[142px]">
                    {items?.map((item) => (
                        <SupportBlock
                            key={item.id}
                            img={item.img}
                            Heading={item.Heading}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Support

const SupportBlock = ({ img, Heading, text }) => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='bg-Primary1 size-[80px] rounded-[50%] mb-[24px] flex justify-center items-center'>
                <div className='bg-black size-[60px] rounded-[50%] flex justify-center items-center'>
                    <img src={img} alt="" />
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <h3 className='font-Poppins font-semibold text-[20px] leading-[28px] mb-[8px]'>{Heading}</h3>
            </div>
            <div className='flex justify-center items-center'>
                <p className='font-Poppins font-normal text-[14px] leading-[20px]'>{text}</p>
            </div>
        </div>
    )
}