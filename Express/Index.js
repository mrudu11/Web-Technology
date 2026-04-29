const express = require('express')
const app = express()
const port = 3000

//middleware  =>write before routes

// const checkRoute=(req,res,next)=>{
//     console.log(req.url)
// }
 //app.use(checkRoute);

 //advance
 app.use((req,res,next)=>{
console.log("middle ware executed",new Date());
  next();  //without next it doesn't execute other routes
 });

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About course!')
})
app.get('/id', (req, res) => {
  res.send('23UAM137')
})
app.get('/email', (req, res) => {
  res.send('mrudula@gmail.com')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


 
