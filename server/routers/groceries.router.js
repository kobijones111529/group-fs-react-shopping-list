const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET route for groceries list
router.get('/', (req, res) => {
    console.log("In GET req");

    let sqlText = `
        SELECT * FROM "groceries"
            WHERE 
                ORDER BY "purchased" ASC,
                "name" ASC;
    `
})

module.exports = router;