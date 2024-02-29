type Location = {
    lat: number;
    long: number;
  };


  
  const getLocation = async ({ lat, long }: Location): Promise<{ city: string | null; stateCode: string | null }> => {
    
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const cityComponent = data.results[0]?.address_components.find((component: any) =>
      component.types.includes("locality")
    );
  
    const stateCodeComponent = data.results[0]?.address_components.find((component: any) =>
      component.types.includes("administrative_area_level_1")
    );
  
    // Check if cityComponent and stateCodeComponent exist before accessing their properties
    const city = cityComponent?.long_name || null;
    const stateCode = stateCodeComponent?.short_name || null;
  
    return { city, stateCode };
  };
  
  export default getLocation;
  