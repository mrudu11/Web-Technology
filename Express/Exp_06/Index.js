//middle ware is fun that runs before sending response it can check data log info authenticate user
const express=require('express')
    const app=express()
    const port=3000
    app.use((req,res,next)=>{
    console.log('Data recieved',new Date(),next())
    })
    app.get('/', (req, res) => {
    res.send('Welcome')

    })
    app.get('/about',(req ,res)=>{
        res.send('about')
    })

    app.get('/id',(req ,res)=>{
        res.send('user id')
    })
    app.get('/city',(req,res)=>{
        res.send('user city')
    })
    app.listen(port,()=>{
        console.log("app is running on port 3000")
})
//pass controle to next function without request will hang
