const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());
app.use('/api', menuItemsRouter); // Ensure this matches your API base URL


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
