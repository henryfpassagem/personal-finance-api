// Import the Express application configured in the 'app.ts' file
import app from './app';

// Set the server port from the enviroment variable, or use 3000 as default
const PORT = process.env.PORT || 3000;

//Start the server and listen on the specific port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});