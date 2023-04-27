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

module.exports = router;