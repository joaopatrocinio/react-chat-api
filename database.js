const MongoClient = require('mongodb').MongoClient

require('dotenv').config()

const dbport = process.env.DB_PORT;
const hostname = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

const url = `mongodb://${username}:${password}@${hostname}:${dbport}/${database}`;

var _db;

module.exports = {
    connectToServer: (callback) => {
        MongoClient.connect( url,  { useUnifiedTopology: true }, (err, client) => {
            _db  = client.db(database);
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};

