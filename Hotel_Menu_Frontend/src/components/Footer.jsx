import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Shivam Hotel & Restaurant.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={logo} alt="Logo" className="h-24 mr-2" />
            {/* <h2 className="text-xl font-bold">Shree Shivam Hotel & Restaurant</h2> */}
          </div>
          <p className="text-xl text-gray-400 mt-4">
            Savor the taste of tradition with every bite at Shree Shivam Hotel & Restaurant.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-4xl"><FaFacebook /></a>
            <a href="#" className="text-4xl"><FaTwitter /></a>
            <a href="#" className="text-4xl"><FaInstagram /></a>
          </div>
          <hr className='mt-4 text-gray-500'/>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-2">Contact Us</h3>
          <p className='text-lg mb-1'>Jassakhedi, Runija Road</p>
          <p className='text-lg mb-1'>Teh. Barnagar, Dist. Ujjain (M.P.)</p>
          <p className='text-lg mb-1'>9407390325</p>
          <p className='text-lg mb-1'>9826812355</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;