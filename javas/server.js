const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB (you need to have MongoDB running)
mongoose.connect('mongodb://localhost/real_estate_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

const Property = mongoose.model('Property', {
  title: String,
  description: String,
  price: Number,
  location: String,
  // Other fields you need
});

// API endpoints
app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/properties', async (req, res) => {
  const { title, description, price, location } = req.body;

  try {
    const property = new Property({ title, description, price, location });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
