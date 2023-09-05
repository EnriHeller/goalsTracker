import dotenv from "dotenv"
dotenv.config();

export default {
  apiKey: process.env.OPENAI_API_KEY,
  mongoDB: process.env.MONGODB_URL
}