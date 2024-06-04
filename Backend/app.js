// Import modules:
import express from "express";
import cors from "cors";

// Create App using express:
const app = express();

// Middlewares:
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

export { app };
