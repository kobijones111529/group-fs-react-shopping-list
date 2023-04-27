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

module.exports = router;