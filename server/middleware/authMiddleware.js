// Instructions:

// Install necessary dependencies:

// jsonwebtoken library for handling JWT

// Create a configuration file (config.js) to store JWT secret key.

// Implement a middleware function for JWT authentication. 

// Extract JWT token from the Authorization header

// Verify the JWT token using the secret key from config

// Attach user data to the request object for further use
// req.userData = { userId: decodedToken.userId };

// Call the next middleware

// Return 401 Unauthorized if authentication fails