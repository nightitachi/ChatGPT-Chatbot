import {Configuration , OpenAIApi} from 'openai';
import dotenv from 'dotenv'
dotenv.config();


const configuration = Configuration({
  apiKey: process.env.API_kEY
})

const openai = new OpenAIApi(configuration())
export default openai