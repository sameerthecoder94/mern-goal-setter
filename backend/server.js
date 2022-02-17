const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
