/* import { Configuration, OpenAIApi } from "openai"
import env from "../config/env.config.js"

const configuration = new Configuration({apiKey: env.apiKey});
import validFormat from "./../models/data.example.js"
const openai = new OpenAIApi(configuration);

const generateResponse = async (tasks, partialTask)=>{

  const prompt = `This is my tasks for my week ${JSON.stringify(tasks)} and I have this task without a date ${JSON.stringify(partialTask)}. Complete the empty fields and only give me the task with a convenient date, respecting this format ${validFormat.date}.`


  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2000,
    temperature: 0.3
  });

  const apiResponse = completion.data.choices[0].text

  return JSON.parse(apiResponse.trim())
  
}

export default generateResponse;


*/
