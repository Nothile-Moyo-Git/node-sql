// Default imports for node
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import homeRoutes from "./routes/home";

// Import the .env variables
dotenv.config();

// Be able to instantiate our express server
const app = express();

// Get our port number from our environment file
// The default port is currently 3000
const port = process.env.DEV_PORT;

// Run the urlEncoded bodyParser to get the body of our objects
// This allows us to get request.body
app.use( bodyParser.urlencoded({ extended : true }) );

// Serve the css files statically
app.use( express.static( path.join(__dirname, "/css") ));

// Serve our image files statically
app.use( express.static( path.join(__dirname, "/images") ));

// Set the type of view engine we want to use
// We can use EJS since it's supported out of the box
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Handle routes
app.use( homeRoutes );

// Listen to the port
app.listen(port, () => {

    console.log(`[server]: Server is running on http://localhost:${port}`);
});