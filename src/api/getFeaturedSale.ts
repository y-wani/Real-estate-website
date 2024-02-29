type Props = {
    stateCode: string,
    city: string
}

  const getFeaturedSale = async (stateCode: string, city: string) => {
    const url = `https://us-real-estate.p.rapidapi.com/v3/for-sale?state_code=${stateCode}&city=${city}&sort=newest&offset=0&limit=42`;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4e79d29bcamsh7cede75efafa279p1e9b7ejsne6cf3392598b',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export default getFeaturedSale;
  
