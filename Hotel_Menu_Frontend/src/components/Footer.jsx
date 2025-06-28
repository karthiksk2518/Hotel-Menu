import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold">Shree Shivam Hotel & Restaurant</h2>
          </div>
          <p className="text-gray-400">
            Savor the taste of tradition with every bite at Shree Shivam Hotel & Restaurant.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-2xl"><FaFacebook /></a>
            <a href="#" className="text-2xl"><FaTwitter /></a>
            <a href="#" className="text-2xl"><FaInstagram /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>123 Hotel Road, City, India</p>
          <p>+91 12345 67890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;