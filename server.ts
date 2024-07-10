import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import sequelize from './config/db';
import clubRoutes from './routes/clubRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
 
app.use('/api', authRoutes);

app.use('/api/clubs', clubRoutes);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database', err));
});
