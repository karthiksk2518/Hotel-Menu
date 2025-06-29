import logo from '../assets/Shivam Hotel & Restaurant.png';

const Navbar = () => {

  return (
    <nav className="bg-gray-700 shadow-md p-4 sticky top-0 z-50 flex justify-between items-center">
      {/* <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">Shree Shivam Hotel</h1>
      </div> */}
      <div>
        <img src={logo} alt="Logo" className="h-12" />
      </div>    
    </nav>
  );
};

export default Navbar;