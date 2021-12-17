var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('home', { result: '.....' });
});
router.post('/', function(req, res) {
    var body = req.body;
    var x = parseFloat(body.x);
    var y = parseFloat(body.y);
    var opt = body.opt;
    var ans = 0;
    switch (opt) {
        case '+':
            {
                console.log(body)
                ans = x + y;
                break
            }
        case '-':
            {
                ans = x + y;
                break
            }
        case '*':
            {
                ans = x + y;
                break
            }
        case '/':
            {
                ans = x + y;
                break
            }

    }
    res.render('home', { result: ans });
});

module.exports = router;