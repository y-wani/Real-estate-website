import axios from 'axios';

const getRestDetails = async (restaurantsId, currencyCode = 'USD') => {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
    params: {
      restaurantsId,  // Use the passed restaurantsId
      currencyCode    // Use the passed currencyCode or default to 'USD'
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;  // Return the response data to the caller
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    throw error;  // Rethrow the error for further handling if needed
  }
};

export default getRestDetails;
