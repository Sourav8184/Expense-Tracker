// Import modules:
import dotenv from "dotenv";
import { connect_DB } from "./db/connect_DB.js";
import { app } from "./app.js";

// .env configration:
dotenv.config({
  path: "./.env",
});

// DataBase Connection:
connect_DB()
  .then(() => {
    // some time database are connected but express app are not working
    app.on("error", (err) => {
      console.log(`Server is Not Start !!`);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// Import Router:
import transactionRouter from "./routes/transactionRoute.js";

app.use("/api/v1", transactionRouter);
