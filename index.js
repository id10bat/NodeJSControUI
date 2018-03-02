var http = require('http');
var path = require('path');
const curl = require("curl");
const jsdom = require("jsdom");
var backend = require('./backend')
var auth = require('./checkOn')
const fs = require('fs');


const express = require('express')
const app = express()

var Page = require('./page')

app.use(express.static(path.join(__dirname, '')));
app.get('/', (req, res) => {


    var html = Page;

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
        'Expires': new Date().toUTCString()
    });
    var t
    if (t === undefined) {
        console.log("t:" + t)
        res.end(html)
        t=true

    } else {
        t = true
        exports.checkIndex = (check) => {
            if (check) { 
                res.end('Hello')
            }else{
                res.end(html)
            }
        }
    }





})

app.get('/login', (req, res) => {
    let loginVal = {
        username: req.query.Username,
        password: req.query.Password
    }

    exports.checkValue = (val) => {
        if (val) {
            res.end("True")
        } else {
            
            res.end("กรุณาใสรหัสให้ถูกต้อง")
        }
    }
    console.log('email:' + loginVal.username, 'pass:' + loginVal.password)
    backend.Login(loginVal.username, loginVal.password)



})

app.get('/regis', (req, res) => {
    let regisVal = {
        username: req.query.Username,
        password: req.query.Password,
        repassword: req.query.Repeat_Password
    }
    console.log('email:' + regisVal.username, 'pass:' + regisVal.password, 'repas:' + regisVal.repassword)
    backend.Register(regisVal.username, regisVal.password, regisVal.repassword)
    res.end(JSON.stringify(regisVal))
})

app.listen(8080);



