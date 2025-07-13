// controllers/expenseController.js
const expenseService = require("../services/expenseService");

const addExpense = async (req, res) => {
  const { category, amount, date } = req.body;
  try {
    await expenseService.addEntry("expenses", category, amount, date);
    res.status(201).json({ message: "Expense added successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addIncome = async (req, res) => {
  const { category, amount, date } = req.body;
  try {
    await expenseService.addEntry("income", category, amount, date);
    res.status(201).json({ message: "Income added successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addExpenseCategory = async (req, res) => {
  const { category } = req.body;
  try {
    await expenseService.addCategory("expenses", category);
    res.status(201).json({ message: "Expense category added successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addIncomeCategory = async (req, res) => {
  const { category } = req.body;
  try {
    await expenseService.addCategory("income", category);
    res.status(201).json({ message: "Income category added successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getEntries("expenses");
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIncome = async (req, res) => {
  try {
    const income = await expenseService.getEntries("income");
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getExpenseCategories = async (req, res) => {
  try {
    const categories = await expenseService.getCategories("expenses");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIncomeCategories = async (req, res) => {
  try {
    const categories = await expenseService.getCategories("income");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addExpense,
  addIncome,
  addExpenseCategory,
  addIncomeCategory,
  getExpenses,
  getIncome,
  getExpenseCategories,
  getIncomeCategories,
};
