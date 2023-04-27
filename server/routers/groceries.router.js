const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET route for groceries list
router.get('/', (req, res) => {
    console.log("In GET req");

    pool.query(`
    SELECT * FROM "groceries"
        WHERE 
            ORDER BY "purchased" ASC,
            "name" ASC;
    `).then((dbRes) => {
        console.log("Got groceries from db:", dbRes);
        res.send(dbRes.rows)
    }).catch((dbErr) => {
        console.log("Error communicating with db:", dbErr);
        res.sendStatus(500);
    })
})

router.post('/', (req,res) => {
    
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

module.exports = router;