import axios from "axios";



axios.get('https://test-server-deploy-beige.vercel.app/list')
.then((data)=>{
    console.log(data.data)
})
.catch((error)=>{
    console.log(error)
})