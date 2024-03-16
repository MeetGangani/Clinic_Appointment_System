import React , {useState} from 'react'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function Medicines() {

  const [searchQuery, setSearchQuery] = useState('');
  
  // State for available medicines
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Medicine 1', price: 10 },
    { id: 2, name: 'Medicine 2', price: 15 },
    { id: 3, name: 'Medicine 3', price: 20 },
    // Add more medicines as needed
  ]);

  // State for items in bucket
  const [bucketItems, setBucketItems] = useState([]);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle adding medicine to bucket
  const handleAddToBucket = (medicine) => {
    setBucketItems([...bucketItems, medicine]);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return bucketItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle payment
  const handlePayment = () => {
    // Implement payment logic here
    console.log('Payment Successful!');
    // Reset bucket after payment
    setBucketItems([]);
  };

  return (
    <>
    <Navbar/>
 
{/*      
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Search for Medicines</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Available Medicines</h3>
        <ul className="space-y-4">
          {medicines
            .filter((medicine) =>
              medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((medicine) => (
              <li key={medicine.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span>{medicine.name}</span>
                <span>${medicine.price}</span>
                <button
                  onClick={() => handleAddToBucket(medicine)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Add to Bucket
                </button>
              </li>
            ))}
        </ul>
      </div>
      {bucketItems.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Bucket</h3>
          <ul className="space-y-4">
            {bucketItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handlePayment}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-4"
            >
              Pay ${calculateTotalPrice()}
            </button>
            <button
              onClick={() => setBucketItems([])}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Clear Bucket
            </button>
          </div>
        </div>
      )}
    </div> */}
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Search for Medicines</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Available Medicines</h3>
        <ul className="grid grid-cols-3 gap-4">
          {medicines
            .filter((medicine) =>
              medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((medicine) => (
              <li key={medicine.id} className="border rounded-lg overflow-hidden shadow-md">
                <img src={`https://mediispecs.in/wp-content/uploads/2020/07/parac-c-1.jpg`} alt={medicine.name} className="w-full h-[400px] object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{medicine.name}</h4>
                  <p className="text-gray-600">₹{medicine.price}</p>
                  <button
                    onClick={() => handleAddToBucket(medicine)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Add to Bucket
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {bucketItems.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Bucket</h3>
          <ul className="space-y-4">
            {bucketItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handlePayment}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-4"
            >
              Pay ₹{calculateTotalPrice()}
            </button>
            <button
              onClick={() => setBucketItems([])}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Clear Bucket
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}

export default Medicines
