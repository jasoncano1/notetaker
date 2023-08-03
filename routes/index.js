const router = require('express').Router(); 
const path = require('path');


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.use('/api', require('./apiRoutes.js'));

module.exports = router;