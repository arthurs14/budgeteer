const { db, Budget, Purchase } = require('../server/db');

const mapAndSave = async(model, items) => Promise.all(await items.map( item => model.create(item)));

const syncAndSeed = async() => {
  try {
    await db.sync({ force: true });

    const defaultBudget = [
      {
        total: 700,
        finances: 300,
        totalExpenses: 300,
        income: 400
      }
    ];

    const [ obj ] = await mapAndSave(Budget, defaultBudget);

    const defaultPurchases = [
      {
        purchaseName: 'boba',
        price: 5.23,
        category: 'food'
      },
      {
        purchaseName: '1tb m.2',
        price: 207.99,
        category: 'electronics'
      }
    ];

    const [ f, e ] = await mapAndSave(Purchase, defaultPurchases);
  } catch(err) {
    throw new Error('something went wrong');
  }
};

syncAndSeed();
