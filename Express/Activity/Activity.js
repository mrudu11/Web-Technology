//build a small web : get put delete 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 137, name: "mrudula", email: "mrudula@gmail.com", password: "1234" },
    { id: 126, name: "samruddhi", email: "samruddhi@gmail.com", password: "5678" }
];


app.get('/', (req, res) => {
    res.send('Welcome to User API');
});

app.post('/users', (req, res) => {
    const { id, name, email, password } = req.body;

    if (!id || !name || !email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    users.push({ id, name, email, password });

    res.json({ message: "User added successfully", users });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const { name, email, password } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    console.log("Updated User:", user);

    res.json({ message: "User updated", user });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});