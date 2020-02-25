const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
console.log('x1')
MongoClient.connect(url, (err, db) => {
console.log('x2', err)

    if (err) throw err
    const dbo = db.db('dbflix')
    dbo.collection('movies').findOne({}, (err, result) => {
        console.log('x3', err)
        if (err) throw err
        console.log(result)
        db.close()
    })
})