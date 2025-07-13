// routes/expenseRoutes.js
const express = require("express");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

// Routes for handling expenses
router.post("/expenses", expenseController.addExpense);
router.post("/income", expenseController.addIncome);
router.get("/expenses", expenseController.getExpenses);
router.get("/income", expenseController.getIncome);
router.get("/categories/expenses", expenseController.getExpenseCategories);
router.get("/categories/income", expenseController.getIncomeCategories);

// New route to add a category (for both expenses and income)
router.post("/categories/expenses", expenseController.addExpenseCategory);
router.post("/categories/income", expenseController.addIncomeCategory);

module.exports = router;
