const express = require("express");
const router = express.Router();

const courses = [
    {
        id: 1,
        name: "Artificial Intelligence and Machine Learning",
        dept: "AIML",
        fees: "₹1,20,000",
        details: "Learn AI, Machine Learning, Python, Data Science."
    },
    {
        id: 2,
        name: "Computer Science",
        dept: "CSE",
        fees: "₹1,00,000",
        details: "Programming, Web Dev, DBMS, Operating Systems."
    },
    {
        id: 3,
        name: "Mechanical Engineering",
        dept: "MECH",
        fees: "₹90,000",
        details: "Thermodynamics, Machines, Design."
    }
];


router.get("/", (req, res) => {
    res.json(courses);
});


router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    res.json(course);
});

module.exports = router;