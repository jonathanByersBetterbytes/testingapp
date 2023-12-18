const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://jonathankbyers:02S6kDc3hv9J0oMX@testingcluster.wdoczch.mongodb.net/?retryWrites=true&w=majority'

app.use(express.static('public'))
app.use(bodyParser.json())

// MongoClient.connect(uri, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
// })
MongoClient.connect(uri)
  .then(client => {
    const db = client.db('TestingCluster')
    const quotesCollection = db.collection('quotes')
    console.log('Connected to Database')
    app.set('view engine', 'ejs')
    app.listen(3000, function(){
        console.log('listening on 3000')
    })
    
    app.get('/', (req, res) => { // pulls quotes from database
      db.collection('quotes')
        .find()
        .toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))        
    })
    

    app.put('/quotes', (req,res) => {
      console.log('app.put' + req.body)
      db.collection('quotes')
        .findOneAndUpdate(
          { name: 'Yoda' }, //query
          {  
            $set: {  // update
              name: req.body.name,
              quote: req.body.quote
            },
          },
          {
            upsert: true  // optionse eg. inserts if no record to update
          }
        )  // find one quote and updated it
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    })
    
    // app.get('/', (req,res) => {
    //     db.collection('quotes')
    //         .find()
    //         .toArray()
    //         .then(results => console.log(results))
    //         .catch(error => console.error(error))
    //         res.render('index.ejs', { quotes: results })
    // })
    
    // app.post('/quotes', (req, res) => {
    //     db.collection('quotes')
    //         .insertOne(req.body)
    //         .then(result => {
    //             console.log(result)
    //             res.redirect('/')
    //         })
    //   })

    // app.use('...')
    // app.listen('...') 
  })
  .catch(error => console.error(error))
