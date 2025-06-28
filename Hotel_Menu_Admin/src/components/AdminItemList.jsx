import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';

const AdminItemList = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', category: '', price: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/menu/${id}`);
        setItems(items.filter(item => item._id !== id));
        alert('Item deleted successfully');
      } catch (err) {
        console.error('Error deleting item:', err.response?.data);
        alert('Error deleting item: ' + (err.response?.data?.message || 'Unknown error'));
      }
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item._id);
    setEditFormData({
      name: item.name,
      category: item.category,
      price: item.price.toString(),
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    if (!editFormData.name || !editFormData.category || !editFormData.price) {
      alert('All fields are required');
      return;
    }

    const priceNum = Number(editFormData.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert('Price must be a valid positive number');
      return;
    }

    const payload = {
      name: editFormData.name.trim(),
      category: editFormData.category.trim(),
      price: priceNum,
    };

    console.log('Editing payload:', payload);

    try {
      await axios.put(`http://localhost:5000/api/menu/${editItem}`, payload);
      const updatedItems = await axios.get('http://localhost:5000/api/menu');
      setItems(updatedItems.data);
      setEditItem(null);
      setEditFormData({ name: '', category: '', price: '' });
      alert('Item updated successfully');
    } catch (err) {
      console.error('Error updating item:', err.response?.data);
      alert('Error updating item: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  const handleCancelEdit = () => {
    setEditItem(null);
    setEditFormData({ name: '', category: '', price: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Menu Items</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2">S.No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id} className="border-b dark:border-gray-700">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">₹{item.price}</td>
              <td className="p-2 flex gap-2">
                <button onClick={() => handleEditClick(item)} className="text-blue-500">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(item._id)} className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editItem && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Edit Menu Item</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Category</label>
                <input
                  type="text"
                  name="category"
                  value={editFormData.category}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Price</label>
                <input
                  type="number"
                  name="price"
                  value={editFormData.price}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminItemList;