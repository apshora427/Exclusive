import img_1 from '../assets/Owner_1.png'
import img_2 from '../assets/Owner_2.png'
import img_3 from '../assets/Owner_3.png'

const card_items = [
    {
        id:1,
        img: img_1,
        name: 'Tom Cruise',
        position: 'Founder & Chairman',
    },
    {
        id:2,
        img: img_2,
        name: 'Emma Watson',
        position: 'Managing Director',
    },
    {
        id:3,
        img: img_3,
        name: 'Will Smith',
        position: 'Product Designer',
    },
    
]

const Owner = () => {
  return (
    <section>
        <div className="container">
            <div className='grid grid-cols-3 gap-[30px]'>
                {card_items?.map((items)=> {
                    return <Card id={items.id} name={items.name} img={items.img} position={items.position}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Owner

const Card = ({img, position, name}) => {
    return (
        <div>
            <div className='bg-[#f5f5f5] flex justify-center pt-[67px] px-[40px] h-[400px]'>
                <img src={img} alt="" />
            </div>
            <div>
                <h5 className='font-Inter font-medium text-[32px] leading-[30px]'>{name}</h5>
                <h6 className='font-Poppins font-normal text-[16px] leading-[24px]'>{position}</h6>
            </div>
        </div>
    )
}