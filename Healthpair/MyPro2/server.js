const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded }  = require('body-parser');
const app = express();
const port = 5000;
import { debug } from 'webpack';
// test
var user = [{
    id: 'test1',
    pwd: 'test123'
}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.post('/Login/validation', (req, res) => {
    console.log(`express received : ${req.body.userId} ${req.body.userPwd}`);
    var inId = req.body.userId;
    var inPwd = req.body.userPwd;
    var chk = false;
    user.forEach(data => {
        if ( data.id == inId && data.pwd == inPwd ) {
            // res.send({ validation: true });
            // res.setHeader('Content-Type', 'text/html');
            // res.redirect('/');
            chk = true;
        }
    })

    if (chk) {
        res.send({ validation: true });
    } else {
        res.send({ validation: false });
    }
});

app.listen(port, () => {
    console.log(`server port : ${port}`);
});