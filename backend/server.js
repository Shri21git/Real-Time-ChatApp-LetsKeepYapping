import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/chats", (req, res) => {
  //   console.log(chats);
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  //   console.log(singleChat);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
