import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from 'react-icons/fa';

const UserMenu = () => {
  return (
    <div className="w-60 flex flex-col bg-gradient-to-br from-black via-[#2c002e] to-[#3a003f] text-white pt-[20px] pb-[10px] pl-[18px] pr-[12pxpx] rounded-md shadow-lg space-y-4">
      <button><MenuItem icon={<FaUser />} label="Manage My Account" /></button>
      <button><MenuItem icon={<FaBoxOpen />} label="My Order" /></button>
      <button><MenuItem icon={<FaTimesCircle />} label="My Cancellations" /></button>
      <button><MenuItem icon={<FaStar />} label="My Reviews" /></button>
      <button><MenuItem icon={<FaSignOutAlt />} label="Logout" /></button>
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer transition duration-200">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default UserMenu;
