var express = require('express');

var app = express();

//app.use('/app/one', express.static('app-one/build'));
//app.use('/app/two', express.static('app-two/elements'));
//app.use('/app/three', express.static('app-three/elements'));
app.use('/', express.static('public'));
app.use('/cardspage', express.static('public'));
app.use('/tables', express.static('public'));
app.use('/js', express.static('public/js'));
app.use('/sidemanu', express.static('sidebar/elements'));
app.use('/homecom', express.static('homecomponent/elements'));
app.use('/headermenu', express.static('headerbar/elements'));
app.use('/cardspage', express.static('cardspage/elements'));
console.log("im here");
app.listen(8000);
