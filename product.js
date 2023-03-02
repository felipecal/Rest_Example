const axios = require('axios');

axios.get('http://localhost:3000/product') .then (res => console.log('Receiver:', res.data));
