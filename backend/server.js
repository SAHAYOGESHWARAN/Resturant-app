const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());
app.use('/api', menuItemsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
