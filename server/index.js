const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors')
const app = express();
var morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://harshityadav:JxsV3y4V7mWl8g1I@cluster0.s9trpdc.mongodb.net/blog2';
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :body"));
// Connect to Mong  oDB
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
// Allow all origins
app.use(cors());


// Routes
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});