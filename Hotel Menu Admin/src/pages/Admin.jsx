import { Routes, Route, NavLink } from 'react-router-dom';
import AdminAddItem from '../components/AdminAddItem';
import AdminItemList from '../components/AdminItemList';

const Admin = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Admin Panel</h2>
      <div className="flex gap-4 mb-6">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 text-white rounded ${
              isActive ? 'bg-blue-500' : 'bg-gray-500'
            }`
          }
        >
          Add Item
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `px-4 py-2 text-white rounded ${
              isActive ? 'bg-blue-500' : 'bg-gray-500'
            }`
          }
        >
          List Items
        </NavLink>
      </div>
      <Routes>
        {/* <Route path="/" element={<AdminAddItem />} /> */}
        <Route path="/add" element={<AdminAddItem />} />
        <Route path="/list" element={<AdminItemList />} />
      </Routes>
    </div>
  );
};

export default Admin;