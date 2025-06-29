import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Start with loading true to show spinner
    axios
      .get('https://shree-shivam-menu-backend.onrender.com/api/menu')
      .then(res => {
        setItems(res.data); // Set data when fetch is successful
        setLoading(false); // Stop loading only after data is received
      })
      .catch(err => {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu items. Please try again later.');
        setLoading(false); // Stop loading on error
      });
  }, []);

  const categories = [...new Set(items.map(item => item.category))];

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Filter grouped items if a category is selected
  const filteredGroupedItems = selectedCategory
    ? { [selectedCategory]: groupedItems[selectedCategory] || [] }
    : groupedItems;

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">
          Wait a moment while Loading...
        </p>
      </div>
    );
  }

  // Show error message if fetch fails
  if (error) {
    return <div className="text-center text-red-500 text-lg mt-8">{error}</div>;
  }

  // Render menu items once data is loaded
  return (
    <div className="container mx-auto p-2">
      <div className="flex overflow-x-auto gap-2 p-2 mb-6 sticky top-20 z-40 bg-gray-100 whitespace-nowrap border-b border-gray-300 no-scrollbar">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {Object.keys(filteredGroupedItems).map(category => (
        <div key={category} className="mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-red-400 text-white mb-4">
              {category}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroupedItems[category].map(item => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;