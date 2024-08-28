type Location = {
  city: string | null;
  stateCode: string | null;
};

const getLocation = async (): Promise<Location> => {
  try {
    // Replace 'YOUR_ACCESS_KEY' with your actual ipapi access key
    const url = `https://api.ipapi.com/api/check?access_key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    return {
      city: data.city ?? null,
      stateCode: data.region_code ?? null,
    };
  } catch (error) {
    console.error('Error fetching location data:', error);
    return { city: null, stateCode: null };
  }
};

export default getLocation;
