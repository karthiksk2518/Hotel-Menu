import logo from '../assets/Shivam Hotel & Restaurant.png';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {

  return (
    <nav className="bg-gray-700 shadow-md p-4 sticky top-0 z-50 items-center">
      <div className='flex justify-between'>
        <img src={logo} alt="Logo" className="h-12" />
        <a href="#" className="text-4xl text-pink-600 mt-2"><FaInstagram /></a>
      </div>    
    </nav>
  );
};

export default Navbar;