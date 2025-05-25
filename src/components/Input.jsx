
const Input = ({ type = "text", placeholder, ...props }) => {
  return <input {...props} className='bg-transparent border-b-1 border-b-gray-500 focus:outline-none leading-[56px] px-2 w-[400px]' type={type} placeholder={placeholder} />

}
export default Input
