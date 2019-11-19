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
  const categories = Object.keys(purchaseList);
  if(categories.length === 0) {
    return 0;
  }
  const categoryPurchases = categories.map(category => {
    return purchaseList[category].reduce((acc, val) => acc += val.price * 1, 0);
  });
  const purchaseTotal = categoryPurchases.reduce((acc, val) => acc += val * 1, 0);
  return purchaseTotal;
};

export {
  calcExpenses,
  calcStanding,
  calcTotalSpent
};
