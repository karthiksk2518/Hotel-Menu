import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../assets/menuData';

const Home = () => {
  const [items] = useState(menuData); // Use local data directly
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // Render menu items
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
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;