const express = require('express');
const router = express.Router();

const userMessage = {
  name: 'Caldas',
  age: 20, 
  state: 'Brazil',
  birthdate: new Date()
};

const productMessage = {
  name: 'RTX 3090 GALAX',
  price: 3900.00, 
  quantity: 5
};

router.get('/user', async function (req, res) {
  res.json(userMessage)
  console.log('Sending userMessage:', userMessage);
});

router.get('/product', async function (req, res) {
  res.json(productMessage)
  console.log('Sending productMessage:', productMessage);
});

module.exports = router;
