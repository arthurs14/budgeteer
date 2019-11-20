const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/database');
const { Budget, Purchase } = require('./db');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/budget', (req, res, next) => {
  Budget.findAll()
    .then(budget => {
      res.send(budget[0]);
    })
    .catch(next);
});

app.get('/api/purchases', (req, res, next) => {
  Purchase.findAll()
    .then(list => {
      // const items = {};
      // //console.log('length: ', list.length);
      // list.forEach(item => {
      //   //console.log('item: ', item);
      //   if(items[item.category]) {
      //     items[item.category] = [...items[item.category], item];
      //     console.log('items[item.category]: ', items[item.category]);
      //   }
      //   items[item.category] = [item];
      // });
      // //console.log('items server: ', items);
      // res.send(items);
      res.send(list);
    })
    .catch(next);
});

app.post('/api/addpurchase', (req, res, next) => {
  Purchase.create({
    purchaseName: req.body.purchaseName,
    price: req.body.price,
    category: req.body.category
  })
  .then(item => res.send(item))
  .catch(next);
});

app.put('/api/updatebudget/:id', (req,res,next) => {
  Budget.findByPk(req.params.id)
    .then(instance => {
      Object.assign(instance, req.body);
      instance.save();
      res.send(instance);
    })
    .catch(next);
});

const port = process.env.PORT || 3000;
db.sync()
  .then(() => app.listen(port, () => console.log(`listening on port ${port}`)));
