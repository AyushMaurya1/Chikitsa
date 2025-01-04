
const mongoose = require('mongoose');
require('dotenv').config({ path: './mongo.env' }); // Specify the path to your custom environment file


console.log("MONGODB_URI:", process.env.MONGO_URI);


// MongoDB Atlas connection string
const mongoURI = process.env.MONGO_URI;

// Database connection
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
    console.log("DB connected successfully to MongoDB Atlas");
}).catch(err => {
    console.error("DB connection error:", err);
});

// User schema and model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;