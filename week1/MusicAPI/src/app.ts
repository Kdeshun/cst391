// Import the express module and specific types (Request, Response) for strong typing.
import express, { Request, Response } from 'express';

// Create an instance of the Express application.
const app = express();

// Define the port number the server will listen on.
const port = 3000;

// Define a route for the root URL ('/').
// This route handles GET requests and sends a response "Hello World from TypeScript!".
app.get('/', (req: Request, res: Response) => {
    // Send a simple text response to the client.
    res.send('Hello World from TypeScript!');
});

// Start the Express server and listen on the specified port.
// When the server starts, it logs a message indicating it's running.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
