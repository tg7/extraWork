var mongojs = require('mongojs')
var db = mongojs('bandsDB', ['bands']);



db.bands.find(function (err, docs) {
    // docs is an array of all the documents in mycollection 
})