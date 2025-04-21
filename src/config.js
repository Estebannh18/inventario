import {config} from "dotenv"

config()

export default {
    hos : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD
}