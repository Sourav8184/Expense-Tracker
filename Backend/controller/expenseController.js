// import modules:
import { Expense } from "../models/expenseModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add income Method:
const addExpense = asyncHandler(async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    //validations:
    if (!title || !category || !description || !date) {
      throw new ApiError(400, "All fields are required!");
    }
   
    if (amount <= 0 || !amount === "number") {
      throw new ApiError(400, "Amount must be a positive number!");
    }
   
    const expense = await Expense.create({
      title,
      amount,
      category,
      description,
      date,
    });
   
    if (!expense) {
      throw new ApiError(400, "Failed to store expense in the DB");
    }
   
    res
      .status(200)
      .json(
        new ApiResponse(200, { expense }, "Expense added in DB Successfully")
      );
  } catch (error) {
    throw new ApiError(500, "Server Error expense not Added", error);
  }
});

// Get incomes Method:
const getExpenses = asyncHandler(async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });

    if (!expenses) {
      throw new ApiError(400, "Failed to get expenses");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { expenses }, "Get expenses Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server Error expenses not get", error);
  }
});

// Delete income Method:
const deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Invalid expense Id");
  }
  await Expense.findByIdAndDelete(id)
    .then(() => {
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Delete expense Successfully"));
    })
    .catch((error) => {
      throw new ApiError(500, "Server error expense not delete", error);
    });
});

export { addExpense, getExpenses, deleteExpense };
