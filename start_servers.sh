#!/bin/bash

# Navigate to the client directory and start the React app
cd client
npm start &

# Navigate to the server directory and start the Node.js app
cd ../server
npm run dev
