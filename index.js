import express from 'express';
import *as dotenv from 'dotenv'
dotenv.config()
import { dbConnection } from './database/dbconnection.js';
import { blogRouter } from './src/modules/blog/blog.router.js';
import { userRouter } from './src/modules/user/user.router.js';




const app = express()
const port = 5000
dbConnection()
app.use(express.json())
app.use((req,res,next,err)=>{
    res.json(err)
})
app.use(userRouter)
app.use('/blogs',blogRouter)
app.get('/home', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 