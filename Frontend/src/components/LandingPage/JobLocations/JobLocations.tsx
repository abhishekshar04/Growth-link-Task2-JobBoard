const locations = [
  { name: "Los Angeles", jobs: 32, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai2b2IvJ63e-SlUqE5i0v34bUaBzBIn5ZGw&s" },
  { name: "Tokyo", jobs: 38, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8cUGz6QPX0aSEagfz4e3GRyDtlzCxC6gDg&s" },
  { name: "San Francisco", jobs: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFzpt2kybLuf7Aqr3ipNTbBIXGCS3gFbJDA&s" },
  { name: "New York", jobs: 22, image: "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?b=1&s=612x612&w=0&k=20&c=CJ24O7_JH0sKBCdQdmxu2qX3YEvOeMsValRHtAIuGDY=" },
  { name: "Seattle", jobs: 12, image: "https://images.pexels.com/photos/3964406/pexels-photo-3964406.jpeg?cs=srgb&dl=pexels-josh-fields-2290258-3964406.jpg&fm=jpg" },
  { name: "California", jobs: 12, image: "https://media.istockphoto.com/id/1308695861/photo/pacific-coastline-view-from-highway-number-1-california.jpg?s=612x612&w=0&k=20&c=m8PTtSjyM5eJjWbcM5qFv1y7gqKDhxDqPPlyXO0qNX4=" },
  { name: "Dallas", jobs: 12, image: "https://media.istockphoto.com/id/522580445/photo/dallas-at-dusk.jpg?s=612x612&w=0&k=20&c=Vgj8EZ48ypylpejRQL2Uim-Osb5qZ-D1zMUziQwEfZg=" },
  { name: "Brooklyn", jobs: 12, image: "https://media.istockphoto.com/id/918150270/photo/new-york-city-skyline.jpg?s=612x612&w=0&k=20&c=PEGr_h5yMZutaAnG3PfemwcypqAWWV78xL2Mkdn1W94=" },
];

const JobLocations = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center bg-white shadow-md p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p className="text-gray-500 text-sm">{location.jobs} jobs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLocations;
