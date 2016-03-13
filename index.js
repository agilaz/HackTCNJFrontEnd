var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongodb = require('mongodb');
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/static'));

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:' + this.address().port + ', dirname: ' + __dirname);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://198.74.58.213:27017/courseInfo';

var jsonArray = [];
var findData = function(db, callback) {

  var cursor = db.collection('courses').find( );
  cursor.each(function(err, doc) {
    //assert.equal(err, null);
    if (doc != null) {
    jsonArray.push(doc);
    console.log(doc);
    } else {
      callback();
    }
  });
};
var pullInfo = function() {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      //chrome.extension.getBackgroundPage().console.log('Connection established to', url);
      // do some work here with the database.
      //insertDoc(db, JSON.parse(text), function() { db.close();});
      findData(db, function() {db.close();});
      //console.log('got data successfully: ' + JSON.stringify(jsonArray));
      //Close connection
      //db.close();
    }
  });
}
io.on('connection', function(socket){
  console.log('user connected');
  socket.on('get data', function() {
    MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      //chrome.extension.getBackgroundPage().console.log('Connection established to', url);
      // do some work here with the database.
      //insertDoc(db, JSON.parse(text), function() { db.close();});
      findData(db, function() {
        db.close();
        console.log(jsonArray);
        socket.emit('data sent', jsonArray);
      });
      //console.log('got data successfully: ' + JSON.stringify(jsonArray));
      //Close connection
      //db.close();
    }
  });
    // setTimeout(pullInfo, 500);
    
  });
});
