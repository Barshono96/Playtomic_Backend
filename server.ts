import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import clubRoutes from './routes/clubRoutes'; // Import club routes
import sequelize from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', clubRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database', err));
});
