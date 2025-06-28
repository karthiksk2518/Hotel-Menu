// import logo from '../../public/logo.png';

const Navbar = () => {

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">Shree Shivam Hotel & Restaurant</h1>
        {/* <img src={logo} alt="Logo" className="h-10 ml-4" /> */}
      </div>
    </nav>
  );
};

export default Navbar;