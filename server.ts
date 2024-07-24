
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import clubRoutes from './routes/clubRoutes';
import courtRoutes from './routes/courtRoutes';
import bookingRoutes from './routes/bookingRoutes';
import sequelize from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors()); 
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', clubRoutes);
app.use('/api', courtRoutes);
app.use('/api', bookingRoutes);
// app.use("/api", userRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize
    .authenticate()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Error connecting to the database', err));
});
