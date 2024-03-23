const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://patidarhimank005:6OrpwXxVWX1qqgH8@cluster0.sxl9ijw.mongodb.net/admin');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password : String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description:String,
    price:Number,
    image: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}