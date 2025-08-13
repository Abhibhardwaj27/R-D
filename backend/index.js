const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/predict', (req, res) => {
  const { time, day } = req.body;

  // Dummy prediction logic based on sample features
  let energy = 0;
  let suggestion = '';

  if (day.toLowerCase() === 'sunday') {
    energy = 3.2;
    suggestion = 'Clean the panels and avoid heavy load in the evening.';
  } else if (time >= 10 && time <= 15) {
    energy = 5.5;
    suggestion = 'Peak sunlight hours! Run heavy devices like pumps now.';
  } else if (time < 8 || time > 18) {
    energy = 1.0;
    suggestion = 'Low sunlight. Save energy by turning off unused appliances.';
  } else {
    energy = 2.8;
    suggestion = 'Use energy-saving devices and monitor power usage.';
  }

  res.json({ predictedEnergy: energy, suggestion });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));