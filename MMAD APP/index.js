const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  // Save user to database (mock)
  res.json({ message: 'User registered!' });
});

app.post('/enquiry', (req, res) => {
  // Save enquiry (mock)
  res.json({ message: 'Enquiry received!' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));