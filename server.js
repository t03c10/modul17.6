var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.render('content');
});

app.get('/auth/google', function (req, res) {
    if (req.query.password == 'alamakota') {
        const pass = req.query.password;
        const user = req.query.username;
        res.render('userlogged', { user, pass });

    } else {
        res.render('content');
    }
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
}); 