const sortPurchases = (purchases) => {
  const sort = {};
  purchases.forEach(item => {
    if(sort[item.category]) {
      sort[item.category] = [...sort[item.category], item];
    } else {
      sort[item.category] = [item];
    }
  });
  return sort;
};

export {
  sortPurchases
};
