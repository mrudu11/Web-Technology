/**1. What is Express?
Express.js
Express is a lightweight web framework for Node.js used to build:

Web applications
REST APIs
Backend services
It simplifies server creation and routing.
******************************************************************************************
2. package.json vs package-lock.json
package.json
Stores project info
Lists dependencies (with version range)
package-lock.json
Stores exact versions installed
Ensures same install across systems

package.json → What you want
package-lock.json → What you actually got
********************************************************************************************
3. dependencies vs devDependencies
dependencies
Required in production
Example: express
devDependencies
Used only in development
Example: nodemon */

// Routes Creation
app.get("/home", (req, res) => {
  res.send("Home Page");
});


app.post("/user", (req, res) => {
  res.send("User created");
});

app.put("/user/1", (req, res) => {
  res.send("Updated");
});

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

/** Why use Middleware?
Logging
Authentication
Validation
Error handling
*********************************************
Types of Middleware
1>Application middleware
2>Router middleware
B3>uilt-in middleware (express.json())
4>Error middleware
5>Third-party middleware (like cors)
************************************************
Benefits of Middleware
Code reuse
Better structure
Easy debugging
Security handling
**************************************************
Middleware in Real Companies
Used for:
Authentication (JWT)
Logging (request tracking)
API rate limiting
Security (helmet, cors)
Data validation
***************************************************
What are Query Parameters?
Extra data sent in URL
*/
app.get("/search", (req, res) => {
  res.send(req.query);
});

app.get("/user", (req, res) => {
  res.send(`Name: ${req.query.name}`);
});

//multiple query parameters
app.get("/user", (req, res) => {
  const { name, age } = req.query;
  res.send(`Name: ${name}, Age: ${age}`);
});

//filter
app.get("/products", (req, res) => {
  const { category, price } = req.query;
  res.send(`Category: ${category}, Price: ${price}`);
});

//default values
app.get("/products", (req, res) => {
  const page = req.query.page || 1;
  res.send(`Page: ${page}`);
});

/**Real-time Use
Search functionality
Pagination
Filtering
Sorting
***************************************
Template Engine
Used to generate dynamic HTML
Examples:
EJS
Pug
Handlebars
*******************************************
implement EJC
npm install ejs

 */
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "John" });
});

/**
 Static Files
Files like:
CSS
Images
JS 
*/
app.use(express.static("public"));
/**
*************************************************
 * Express Router */
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;

/**WORKFLOW
Step-by-step:
Client sends request
Request hits Express server
Middleware runs
Route is matched
Controller logic executes
Response sent back
 */


