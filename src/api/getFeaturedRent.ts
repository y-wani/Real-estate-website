type Props = {
  stateCode: string;
  city: string;
};
const getFeaturedRent = async (stateCode: string, city: string) => {
    const url = `https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${city}&state_code=${stateCode}`;
    const headers = new Headers();
    headers.append(
      "X-RapidAPI-Key",
      process.env.NEXT_PUBLIC_API_KEY_REAL_ESTATE || ""
    );
    headers.append("X-RapidAPI-Host", "us-real-estate.p.rapidapi.com");
  
    const options = {
      method: "GET",
      headers: headers,
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export default getFeaturedRent;
  