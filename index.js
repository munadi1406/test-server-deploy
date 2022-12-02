import express from 'express'
import axios from 'axios'

const app = express();

const port = 5000



app.get('/show',(req,res)=>{
    axios.get('https://test-server-deploy-beige.vercel.app/list')
    .then((res)=>{
        res.send(res);
    })
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