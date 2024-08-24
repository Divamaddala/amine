import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const app = express();
app.use(express.json());

// Connect to the database
createConnection().then(() => {
    console.log('Database connected');
}).catch(error => console.log('Database connection error:', error));

app.get('/', (req, res) => {
    res.send('Event Management System API');
});

export default app;
