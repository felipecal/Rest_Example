const axios = require('axios');

axios.get('http://localhost:3000/user') .then (res => console.log('Receiver:', res.data));
