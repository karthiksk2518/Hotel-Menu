import logo from '../assets/Shivam Hotel & Restaurant.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={logo} alt="Logo" className="h-24 mr-2" />
          </div>
          <p className="text-xl text-gray-400 mt-4">
            Savor the taste of tradition with every bite at Shree Shivam Hotel & Restaurant.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-2">Contact Us</h3>
          <p className='text-lg text-gray-400 mb-1'>Jassakhedi, Runija Road</p>
          <p className='text-lg text-gray-400 mb-1'>Teh. Barnagar, Dist. Ujjain (M.P.)</p>
          <p className='text-lg text-gray-400 mb-1'>9407390325</p>
          <p className='text-lg text-gray-400 mb-1'>9826812355</p>
        </div>
      </div>
      <hr className="my-6 border-t border-white w-full max-w-4xl mx-auto" />
      <div className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} Shree Shivam Hotel & Restaurant. All rights reserved.
      </div>
      <p className='text-center text-gray-400'>Designed and Developed by Kundan Patidar</p>
    </footer>
  );
};

export default Footer;