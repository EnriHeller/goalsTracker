import express from "express"
import apiRoutes from "./src/routers/app.routers.js"
import { dbConfig } from "./src/config/dbConfig.js";
import cors from "cors"
await dbConfig()

const PORT = process.env.PORT || 8080;
const app = express()

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api", apiRoutes)

//Listen
const server= app.listen(PORT, ()=>{
    console.log("Ready on port =>", PORT)
})

//Listeners
server.on("error", (error)=>{
    console.log("There was an error in the server");
    console.log(error)
})
