const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentProfileRoutes = require('./Routes/studentprofilerote');
const userRoute = require('./Routes/userRoute');
const courseRoute = require('./Routes/courseroute');
const cors = require('cors');
const app = express();

// Middleware for body parsing
app.use(bodyParser.json());
app.use(cors());
// MongoDB Connection
const MONGO_URI = 'mongodb+srv://sms:satish123@cluster0.mavt3vb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use('/api/studentprofiles', studentProfileRoutes);
app.use('/api/users', userRoute);
app.use('/api/course', courseRoute);
app.use(cors({
    origin: 'http://localhost:3000'  // Allow only this origin
}));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


