const MenuItem = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      {/* <p className="text-gray-600">{item.category}</p> */}
      <p className="text-blue-500 font-bold">₹{item.price}</p>
    </div>
  );
};

export default MenuItem;