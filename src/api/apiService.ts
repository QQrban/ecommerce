export const getNews = async () => {
  try {
    const response = await fetch(
      'https://63c164d699c0a15d28e89cfb.mockapi.io/pety/test'
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
