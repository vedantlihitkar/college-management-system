import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({
    origin : process.env.cors_origin ,
    crediantials : true 
}
))
app.use(express.json({limit :"16kb"}))
app.use(express.urlencoded({extended :true , limit : "16kb"}))
app.use(express.static("public")) //file ya kuch save karna ho to public folder me save hoga
app.use(cookieParser())


//routes import














// http://localhost:8000/users/register

export { app } 