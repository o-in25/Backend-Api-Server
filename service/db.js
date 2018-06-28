const MongoClient = require('mongodb').MongoClient;
let db = require('mongodb').Db;
module.exports = {

  connect: function(callback) {
      MongoClient.connect('// url //', (err, dbobj) => {
          if(err) {
              console.log('Cannot connect to database with specified URL...');
              throw err;
          } else {
              console.log('Successful connection');
              callback(dbobj);
          }
      });
  },
};