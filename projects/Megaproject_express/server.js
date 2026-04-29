const express = require("express");
const path = require("path"); 

const app = express();

const courseRoutes = require("./routes/courseRoutes");

app.use(express.json());


app.use("/api/courses", courseRoutes);

app.use(express.static("pages"));


app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "register.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});