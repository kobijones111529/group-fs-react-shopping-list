const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groceriesRouter = require('./routers/groceries.router');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.post('/groceries', (req,res) => {
    console.log('POST');
    let groceryName = req.body.name 
    let groceryQuantity = req.body.quantity 
    let groceryUnit = req.body.unit 
    let groceryPurchase = req.body.purchased

    const sqlText = `
    INSERT INTO groceries
        (name, quantity, unit, purchased)
        VALUES
        ($1, $2, $3, $4)
    `;

    const sqlValues = [groceryName, groceryQuantity, groceryUnit, groceryPurchase]

    pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('POST /groceries fail:', error);
      res.sendStatus(500);
    })
})
app.use('/groceries', groceriesRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});