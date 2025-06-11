import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const AllProducts = ({ img, sale, className, star, heading, price, originalPrice, rate }) => {
  return (
    <div className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-lg overflow-hidden mx-[15px]">
      <div className="bg-[#F5F5F5] relative h-[250px] mb-[16px] cursor-pointer group">
        <div className="flex justify-center items-center h-full overflow-hidden">
          <img
            className={`my-[50px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 ${className}`}
            src={img}
            alt=""
          />
        </div>
        <div className="bg-Button2 py-[4px] px-[12px] absolute top-[12px] left-[12px] font-Poppins font-normal text-[12px] leading-[18px] text-white rounded">
          {sale}
        </div>
        <div className="absolute flex flex-col gap-[8px] top-[12px] right-[12px]">
          {[<FaRegHeart />, <IoEyeOutline />].map((Icon, i) => (
            <div
              key={i}
              className="size-[32px] rounded-full flex justify-center items-center bg-white transition-transform duration-300 group-hover:scale-110 hover:bg-gray-100"
            >
              {Icon}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Button />
        </div>
      </div>
      <div>
        <h3 className="font-Poppins font-medium text-[16px] leading-[24px]">{heading}</h3>
        <div className="flex gap-[12px] my-[12px]">
          <h6 className="font-Poppins font-medium text-[16px] leading-[24px] text-secondary2">{price}</h6>
          <h6 className="font-Poppins font-medium text-[16px] leading-[24px] text-gray-500 line-through">{originalPrice}</h6>
        </div>
        <div className="flex items-center gap-[8px]">
          <ul className="flex">
            {[...Array(5)].map((_, i) => (
              <li key={i} className={`text-yellow-300 ${star}`}><FaStar /></li>
            ))}
          </ul>
          <h6 className="font-Poppins font-medium text-[16px] leading-[24px] text-gray-500">{rate}</h6>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;


const Button = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-black hover:bg-gray-800 transition-colors duration-300 w-full py-[10px]">
        <a className="text-white font-Poppins font-medium text-[18px] leading-[24px]" href="#">
          Add To Cart
        </a>
      </button>
    </div>
  );
};
