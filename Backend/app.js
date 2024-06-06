// Import modules:
import express from "express";
import cors from "cors";

// Create App using express:
const app = express();

// Middlewares:
app.use(cors());
app.use(express.json());

export { app };
