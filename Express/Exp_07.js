const express = require('express')
const app = express();
const port = 3000;

let users = [
    { id: 137, name: "Mrudula" },
    { id: 126, name: "Samruddhi" },
    { id: 129, name: "Vaishnvi" },
    { id: 115, name: "Amruta" }
];

// Get all users
app.get("/users", (req, res) => {
    res.json({
        message: "Users List",
        users: users
    });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id); 

    let user_p = {};

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            user_p = users[i];
            break;
        }
    }

    res.json({
        message: "Particular user info",
        data: user_p
    });
    
});

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});