//handling request and response
//express application handles http req and res
/**
 * req => it contains information about client request.
 url ,header, querry parameter, req body
 */
const express = require('express')
const app = express()
const port = 3001

app.get('/user', (req, res) => {
  console.log(req.query.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/**localhost:3000/user?name='mrudula' */