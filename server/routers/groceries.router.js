const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET route for groceries list
router.get('/', (req, res) => {
    console.log("In GET req");

    let sqlText = `
    SELECT * FROM "groceries"
        ORDER BY "purchased" ASC, "name" ASC;
            
    `;

    pool.query(sqlText).then((dbRes) => {
        console.log("Got groceries from db:", dbRes.rows);
        res.send(dbRes.rows)
    }).catch((dbErr) => {
        console.log("Error communicating with db:", dbErr);
        res.sendStatus(500);
    })
})

router.put('/reset', (_, res) => {
    const query = `
        UPDATE "groceries"
        SET purchased = FALSE;
    `;

    pool.query(query)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(dbErr => {
            console.error('Error in PUT /reset:', dbErr);
            res.sendStatus(500);
        });
});

router.delete('/clear', (_, res) => {
    const query = `
        DELETE FROM "groceries";
    `;

    pool.query(query)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(dbErr => {
            console.error('Error in DELETE /clear:', dbErr);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log("In DELETE by ID route: ", req.params.id);

    let sqlText = `
        DELETE FROM "groceries"
            WHERE "id" = $1;
    `;

    pool.query(sqlText, [req.params.id]).then((dbRes) => {
        console.log(`Deleted ${req.params.id} from db`);
        res.sendStatus(200);
    }).catch((dbErr) => {
        console.log(`Error deleting ${req.params.id} from db:`, dbErr);
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

router.put('/buy/:id', (req, res) => {
    // req.body for updating true/false
    // req.params.id to know which item to update by ID
    // console.log("in PUT update route", req.body)
    console.log("in PUT update route", req.params.id);


    const sqlQuery = `
        UPDATE "groceries"
            SET "purchased" = true
            WHERE "id" = $1;
    `;

    const sqlValues = [req.params.id];

    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            console.log("Successfully updated db item", dbRes);
            res.sendStatus(200);
        }).catch((dbErr) => {
            console.log("Couldn't update db item", dbErr);
            res.sendStatus(500);
        })

})
module.exports = router;