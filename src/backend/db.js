// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// console.log('x1')
// MongoClient.connect(url, (err, db) => {
// console.log('x2', err)

//     if (err) throw err
//     const dbo = db.db('dbflix')
//     dbo.collection('movies').findOne({}, (err, result) => {
//         console.log('x3', err)
//         if (err) throw err
//         console.log(result.id)
//         db.close()
//     })
// })



// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url)
//     .then(function (db) { // <- db as first argument
//             console.log(db)
//             // if (err) throw err
//             const dbo = db.db('dbflix')
//             dbo.collection('movies').findOne({}, (err, result) => {
//             console.log('x3', err)
//             if (err) throw err
//             console.log(result.id)
//             db.close()
//         })
//     })
//     .catch(function (err) {})


const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'

const assert = require('assert');

async function main() {
    let client, db
    try{
        client = await MongoClient.connect(url, {useNewUrlParser: true});
        db = client.db('dbflix')
        let dCollection = db.collection('movies')
    //    let result = await dCollection.find();   
        result = await dCollection.findOne({}, (err, result) => {
            // console.log('x3', err)
            if (err) throw err
            console.log(result.title)
            // db.close()
        })
    // let result = await dCollection.countDocuments();
    // return result.toArray();
    }
    catch(err){ console.error(err); } // catch any mongo error here
    finally{ client.close(); } // make sure to close your connection after
}

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log('Connected successfully to server');
            const dbo = client.db(dbName);
            resolve(dbo);
        });
    });
}


module.exports = { main, connect };
