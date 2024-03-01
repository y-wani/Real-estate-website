type Props = {
  stateCode: string;
  city: string;
};

const getFeaturedSale = async (stateCode: string, city: string) => {
  const url = `https://us-real-estate.p.rapidapi.com/v3/for-sale?state_code=${stateCode}&city=${city}&sort=newest&offset=0&limit=40`;
  console.log(process.env.NEXT_PUBLIC_API_KEY_REAL_ESTATE);

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
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getFeaturedSale;
