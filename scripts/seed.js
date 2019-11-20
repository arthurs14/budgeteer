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
  } catch(err) {
    throw new Error('something went wrong');
  }
};

syncAndSeed();
