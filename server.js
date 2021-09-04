const express = require('express');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 9001; 
const app = express();

// Express middelware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});