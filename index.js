const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    // Make a GET request to the API
    const response = await axios.get('https://fakestoreapi.com/products');
console.log("hello");
    // Send the response data to the client
    res.json(response.data);
  } catch (error) {
    // Handle any errors that may occur during the request
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
