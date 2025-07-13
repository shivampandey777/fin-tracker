// services/expenseService.js
const supabase = require("../config/supabaseClient");

const addEntry = async (table, category, amount, date) => {
  if (!category || !amount || amount <= 0) {
    throw new Error("Invalid data");
  }

  const { data, error } = await supabase
    .from(table)
    .insert([{ category, amount, date }]);

  if (error) throw new Error(error.message);
  return data;
};

const getEntries = async (table) => {
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw new Error(error.message);
  return data;
};

const getCategories = async (table) => {
  const { data, error } = await supabase
    .from(table)
    .select("category")
    .distinct();
  if (error) throw new Error(error.message);
  return data.map((item) => item.category);
};

const addCategory = async (table, category) => {
  if (!category) {
    throw new Error("Category cannot be empty");
  }

  // Insert the new category into the specified table (expenses or income)
  const { data, error } = await supabase.from(table).insert([{ category }]);

  if (error) throw new Error(error.message);
  return data;
};

module.exports = {
  addEntry,
  getEntries,
  getCategories,
  addCategory,
};
