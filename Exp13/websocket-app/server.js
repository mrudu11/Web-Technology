const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("File not found");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
});

// Create WebSocket server attached to HTTP server
const wss = new WebSocket.Server({ server });

console.log("Server running on http://localhost:4000");

// When client connects
wss.on("connection", (ws) => {
    console.log("Client connected");

    // Receive message from client
    ws.on("message", (message) => {
        console.log("Received:", message.toString());

        // Send response back
        ws.send("Server received: " + message);
    });

    // On disconnect
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(4000);

