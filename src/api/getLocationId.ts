import axios from 'axios';

const getLocationID = async (city: string): Promise<number | null> => {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation',
    params: { query: city },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log('API Response:', response.data); // For debugging purposes

    const locations = response.data?.data || [];
    if (locations.length > 0) {
      return locations[0].locationId || null;
    }
    return null;
  } catch (error) {
    console.error('Error fetching location ID:', error);
    return null;
  }
};

export default getLocationID;
