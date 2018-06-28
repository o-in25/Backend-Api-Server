let express = require('express');
let CryptoJS = require('crypto-js');
let DBService = require('../service/db-service');
let router = require('app').router;

// get all users
router.get('/users', (req, res) => {
    console.log('Fetching...');
    DBService.$read({}, (dbo, dbr) => {
        res.json(dbr);
        dbo.close();
    }, (err) => {
        console.log('Could not find...');
        res.send(err);
    });
});

// get user by username, email, password
router.get('/users/:username/:email/:password', (req, res) => {
    console.log('Finding...');
    let requestParams = req.params;
    DBService.$read({username: requestParams.username, password: CryptoJS.AES.encrypt(requestParams.password, 'wayland2017').toString(), email: requestParams.email}, (dbo, dbr) => {
      res.json(dbr);
      dbo.close();
    }, (err) => {
        console.log('Could not find...');
        res.send(err);
    });
});

// get user by email and password
router.get('/users/:email/:password', (req, res) => {
    console.log('Finding...');
    let requestParams = req.params;
    DBService.$read({password: CryptoJS.AES.encrypt(requestParams.password, 'wayland2017').toString(), email: requestParams.email}, (dbo, dbr) => {
        res.json(dbr);
        dbo.close();
    }, (err) => {
        console.log('Could not find...');
        res.send(err);
    });
});

// get user by username and password
router.get('/users/:username/:password', (req, res) => {
    console.log('Finding...');
    let requestParams = req.params;
    DBService.$read({username: requestParams.username, password: CryptoJS.AES.encrypt(requestParams.password, 'wayland2017').toString()}, (dbo, dbr) => {
        res.json(dbr);
        dbo.close();
    }, (err) => {
        console.log('Could not find...');
        res.send(err);
    });
});

// find user by email and password
router.get('/users/:email/:password', (req, res) => {
    console.log('Finding...');
    let requestParams = req.params;
    DBService.$read({password: CryptoJS.AES.encrypt(requestParams.password, 'wayland2017').toString(), email: requestParams.email}, (dbo, dbr) => {
        res.json(dbr);
        dbo.close();
    }, (err) => {
        console.log('Could not find...');
        res.send(err);
    });
});


// create a user
router.post('/users/:username/:email/:password', (req, res) => {
    console.log('Creating...');
    let requestParams = req.params;
    // create the new user
    console.log(requestParams);
    DBService.$create({username: requestParams.username, password: CryptoJS.AES.encrypt(requestParams.password, 'wayland2017').toString(), email: requestParams.email}, (dbo, dbr) => {
        res.json(dbr);
        dbo.close();
    }, (err) => {
        console.log('Could not create...');
        res.send(err);
    });
});

//router.put('');
module.exports = router;