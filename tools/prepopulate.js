var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/profiler');
var profiles = require('./profiles');
var users = [
  { name: 'admin', pwd: 'password'},
  { name: 'takaheraw', pwd: 'password'}
];

db.collection('users').remove({});
db.collection('profiles').remove({});

db.collection('users').insert(users);
Object.keys(profiles).forEach(function(key) {
    db.collection('profiles').insert(profiles[key]);
});

db.close();