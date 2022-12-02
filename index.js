import express from 'express'


const app = express();

const port = 5000



app.get('/',(req,res)=>{
    res.send("path /")
})


app.get('/list',(req,res)=>{
    res.json({
        data:[
        {
            id:1,
            username:"jamal",
            address:"jonggol"
        },
        {
            id:2,
            username:"sapri",
            address:"jimbabwe"
        }
    ]
    })
})



app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})