import express from "express";
import chats from "./data/data.js"; // to check if chat data works
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// backend connection
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
