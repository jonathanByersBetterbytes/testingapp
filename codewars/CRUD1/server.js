const bodyParser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const uri = 'mongodb+srv://jonathankbyers:02S6kDc3hv9J0oMX@testingcluster.wdoczch.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(uri)
    .then( client => {
        console.log('Connected to Database')
        const db = client.db('TestingCluster')
        const quotesCollection = db.collection('quotes')
        
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.listen(3000, () => console.log('listening on 3000'))
        app.use(express.static('public'))
        app.use(bodyParser.json())

        app.get('/', (req, res) => {  // Read === get
            const cursor = quotesCollection.find()
            cursor.toArray()
                .then(results => res.render('index.ejs', { quotes: results }))  // display the records on the webpage
                .catch(error => console.log(error))
            
            //res.send('Hello World')
            //res.sendFile(__dirname + '/index.html')
        })
        
        app.post('/quotes', (req, res) => {  // Create === post
            // quotesCollection
            //     .insertOne(req.body)
            //     .then(() => res.redirect('/'))
            //     .catch(error => console.log(error))
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda'},
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote
                        }
                    },
                    { upsert: true }
                )
                .then(result => console.log(result.body))
                .catch(error => console.log(error))
        })



    })
    .catch(error => console.log(error))



console.log('May Node be with you')




