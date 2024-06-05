// Import modules:
import { Router } from "express";
import {
  addIncome,
  getIncomes,
  deleteIncome,
} from "../controller/incomeController.js";
import {
  addExpense,
  getExpenses,
  deleteExpense,
} from "../controller/expenseController.js";

// Create instance of Router:
const router = Router();

// Create Routes:
router.route("/add-income").post(addIncome);
router.route("/get-incomes").get(getIncomes);
router.route("/delete-income/:id").delete(deleteIncome);

router.route("/add-expense").post(addExpense);
router.route("/get-expenses").get(getExpenses);
router.route("/delete-expense/:id").delete(deleteExpense);

export default router;
