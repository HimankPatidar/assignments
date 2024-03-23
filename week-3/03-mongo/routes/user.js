const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password : req.body.password,
    })
    res.json({
        message : "User created Successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
    .then(courses => {
        res.json(courses)
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
        const courseId = req.params.courseId;
        const {username} = req.header;

        await User.updateOne({
            username : username,
        }, {
            "$push" : {purchasedCourses:courseId}
        })
        res.json({
            message : 'Course purchased successfully'
        })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const {username} = req.headers;

    const user = await User.find({username})

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        purchasedCourses:courses
    })
});

module.exports = router
