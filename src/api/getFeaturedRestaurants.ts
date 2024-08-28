import axios from 'axios';

const getFeaturedRestaurants = async (locationId: number): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
    params: {
      locationId: locationId.toString() // Ensure locationId is a string
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('API Response:', response.data); // For debugging purposes
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export default getFeaturedRestaurants;
