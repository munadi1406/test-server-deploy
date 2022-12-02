import express from 'express'


const app = express();

const port = 5000



app.get('/',(req,res)=>{
    res.send("path /")
})


app.get('/list',(req,res)=>{
    res.send('path /list')
})



app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})