function SectionHead({ text, para }) {
  return (
    <div>
      <div className="flex flex-col gap-[30px] ">
        <span className="relative before:absolute before:left-[-40px] before:bottom-[-8px] before:content-[''] before:w-5 before:h-10 before:bg-[#DB4444] before:mr-[30px] before:rounded-[4px] text-secondary2 text-[16px] leading-[20px] font-semibold font-Poppins ml-[40px]">{text}</span>
        <h5 className="text-[36px] font-Inter font-semibold leading-[48px] text-black mb-[60px]">{para}</h5>
      </div>
    </div>
  )
}

export default SectionHead