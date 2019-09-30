// Original function

const getExpensesTotal = (expenses) => {
  const sum = Array.isArray(expenses) ? expenses.map(cur => cur.amount).reduce((acc, curValue) => acc + curValue) : 0
  const totalExpenses = Array.isArray(expenses) ? expenses.length : 0

  return sum > 0 || Array.isArray(expenses) && expenses.length > 0  ? `Viewing ${totalExpenses} expenses totaling the amount of ${sum}` : 'Viewing none expenses'
}

// the actuall exported function

export default (expenses) => expenses.map( cur => cur.amount).reduce((sum, value) => sum + value, 0)