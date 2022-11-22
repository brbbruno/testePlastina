// Import the express with express name
import express from 'express';
import * as db from './queries'

// Initialize the express module with app variable
const app: express.Application = express();

let fake_db: any = [];

// Define the port for the application is run
const port: number = 3000;

// Handle the comming data.
app.use(express.json());

// Server the api endpints.
app.listen(port, (): void => {
    console.log(`Typescript API server http://localhost:${port}/`);
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)