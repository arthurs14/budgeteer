import { daysLeft } from './dateMethods';
import { sortPurchases } from './sort';

// Calculate expenses with 15% additional
const calcExpenses = (expense) => {
  const percent = 1.15;
  return expense * percent;
};

// Calculate if you have money left over or not
const calcStanding = (data) => {
  const { total, finances, totalExpenses, income } = data;
  if(Object.keys(data).length === 0) {
    return 0;
  }
 return (total - finances - totalExpenses + income) * 1;
};

// Calculate total spent on purchases
const calcTotalSpent = (purchaseList) => {
  const sortedPurchases = sortPurchases(purchaseList);
  const categories = Object.keys(sortedPurchases);
  if(categories.length === 0) {
    return 0;
  }
  const categoryPurchases = categories.map(category => {
    return sortedPurchases[category].reduce((acc, val) => acc += val.price * 1, 0);
  });
  const purchaseTotal = categoryPurchases.reduce((acc, val) => acc += val * 1, 0);
  return purchaseTotal;
};

// Calculate budget thats available after calculating how much
// money is left in checkings
const spendableBalance = (budget) => {
  const balance = calcStanding(budget);
  const savings = 2/3;
  return balance - (balance * savings);
};

// Calculate daily balance
const calcDaily = (budget) => {
  const balance = spendableBalance(budget);
  if(balance === 0) {
    return 0;
  }
  const days = daysLeft();
  return balance / days;
};

export {
  calcExpenses,
  calcStanding,
  calcTotalSpent,
  spendableBalance,
  calcDaily
};
