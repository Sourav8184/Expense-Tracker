// Import modules:
import { Router } from "express";
import {
  addIncome,
  getIncomes,
  deleteIncome,
} from "../controller/incomeController.js";

// Create instance of Router:
const router = Router();

// Create Routes:
router.route("/add-income").post(addIncome);
router.route("/get-incomes").get(getIncomes);
router.route("/delete-income/:id").delete(deleteIncome);

export default router;
