const router = require('express').Router();
const data = require('../db/db.json');
const { writeFile } = require('fs');

router.get('/notes', (req, res) => {
    res.json(data);
});

router.post('/notes', ({ body }, res) => {

    body.id = Math.floor(Math.random() * 1000000).toString(16);

    data.push(body);
    writeFile('./db/db.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log(data);
        res.json(data);
    })
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const newData = data.filter(note => note.id !== id);
    writeFile('./db/db.json', JSON.stringify(newData), (err) => {

        if (err) throw err;
        res.json(newData);
    });
});
module.exports = router;