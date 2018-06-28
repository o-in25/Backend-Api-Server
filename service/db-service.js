var db = require('mongodb').Db;
var dbjs = require('./db.js');
module.exports = {
    $create: function(data, successCallback, errorCallback) {
        dbjs.connect(dbobj => {
            dbobj.db('users').collection('client').insertOne(data, (err, res) => {
                if(err) {
                    console.log('Error inserting ' + data.toString() +' into database...');
                    dbobj.close();
                    errorCallback(err);
                } else {
                    successCallback(dbobj, res);
                }
            });
        })
    },
    $read: function(data, successCallback, errorCallback){
        dbjs.connect(dbobj => {
            dbobj.db('users').collection('client').find({}, data).toArray((err, res) => {
                if(err) {
                    console.log('Error finding record ' + data.toString() + ' into database...');
                    dbobj.close();
                    errorCallback(err);
                } else {
                    // needs to close the dbobj
                    // dbobj.close();
                    console.log(res);
                    successCallback(dbobj, res);
                }
            });
        })
    },
    $update: function(query, data, successCallback, errorCallback){
        dbjs.connect(dbobj => {
            dbobj.db('users').collection('client').updateOne(query, data, (err, res) => {
                if(err) {
                    console.log('Error updating ' + data.toString() + ' into database...');
                    dbobj.close();
                    errorCallback(err);
                } else {
                    dbobj.close();
                    successCallback(dbobj, res);
                }
            });
        })
    },
    $delete: function(data, successCallback, errorCallback){
        dbjs.connect(dbobj => {
            dbobj.db('users').collection('client').deleteOne(data, (err, res) => {
                if(err) {
                    console.log('Error deleting ' + data.toString() + 'into database...');
                    dbobj.close();
                    errorCallback(err);
                } else {
                    successCallback(dbobj, res);
                }
            });
        })
    },

};