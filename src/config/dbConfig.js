import mongoose from 'mongoose'
import options from "./options.js"

export async function dbConfig(){
    mongoose.set('strictQuery', false)
    mongoose.connect(options.mongoDB.url, (error) => {
    if(error){
        return console.log(`db connection failed: ${error}`)
    }
    console.log('connected to db');
})
}


