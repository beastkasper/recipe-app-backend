require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Подключение к базе данных
connectDB();

app.use(express.json());
app.use(cors());
// Определите ваши маршруты здесь
app.use('/api/recipes', require('./routes/recipeRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
