import mongoose from "mongoose";

// Income Schema:
const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
      trim: true,
    },
  },
  { timestamps: true }
);

// Income model:
const Income = mongoose.model("Income", IncomeSchema);
export { Income };
