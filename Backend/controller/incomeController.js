// import modules:
import { Income } from "../models/incomeModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add income Method:
const addIncome = asyncHandler(async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    //validations:
    if (!title || !category || !description || !date) {
      throw new ApiError(400, "All fields are required!");
    }

    if (amount <= 0 || !amount === "number") {
      throw new ApiError(400, "Amount must be a positive number!");
    }

    const income = await Income.create({
      title,
      amount,
      category,
      description,
      date,
    });

    if (!income) {
      throw new ApiError(400, "Failed to store income in the DB");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, { income }, "Income added in DB Successfully")
      );
  } catch (error) {
    throw new ApiError(500, "Server Error income not Added", error);
  }
});

// Get income Method:
const getIncomes = asyncHandler(async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });

    if (!incomes) {
      throw new ApiError(400, "Failed to get incomes");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { incomes }, "Get Income Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server Error income not get", error);
  }
});

// Delete income Method:
const deleteIncome = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Invalid income Id");
  }
  await Income.findByIdAndDelete(id)
    .then(() => {
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Delete income Successfully"));
    })
    .catch((error) => {
      throw new ApiError(500, "Server error income not delete", error);
    });
});

export { addIncome, getIncomes, deleteIncome };
