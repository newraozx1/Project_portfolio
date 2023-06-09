import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { contactrouter } from "./routes/contact.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); //converts the data in json formate
app.use(cors());

app.use(contactrouter);

mongoose.connect();

app.listen(process.env.PORT, () => console.log("server started"));
