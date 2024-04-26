import getToken from "./getToken";

const fetchProducts = async () => {
  const token = await getToken();
  console.log(token);
  try {
    const res = await fetch(
      "https://apps.autoverify-be.bloombyte.dev/api/v1/products/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    console.log(data);
    return [];
    // return data.results;
  } catch (error) {
    console.log(error);
  }
};
export default fetchProducts;
