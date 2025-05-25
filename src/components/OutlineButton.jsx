

const OutlineButton = ({ TagName, children, className = "", type = "button", ...prop }) => {
  return (
    <TagName
      {...prop}
      type={type}
      className={`
      flex  justify-center gap-[16px] items-center px-[86px] 
      rounded-[4px] leading-[56px] bg-transparent text-black 
      cursor-pointer border border-gray-700 ${className}`}>
      {children}
    </TagName>
  )
}
export default OutlineButton