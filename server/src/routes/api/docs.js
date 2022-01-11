// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
//   }
require('custom-env').env('local');

const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();

// for reference, for now
// const validQueryFields = [
//     '_id',
//     'title',
//     'source',
//     'time',
//     'content_url',
//     'content'
// ];

// Get Docs
router.get('/', async (req, res) => {
    const filters = req.query;
    // console.log(filters);
    const docs = await loadDocs().catch(console.error);
    const filteredDocs = await docs.find({
        time: {
            $gte: filters.start_date
        }
    }).toArray()
    res.send(filteredDocs);
});

async function loadDocs() {
    const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@cluster0.seck8.mongodb.net/conversations?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { 
        useNewUrlParser: true, useUnifiedTopology: true 
    });

    // Connect to Mongo cluster
    await client.connect();

    // Load in all GoogleNews docs
    return collection =  loadCollection(client, 'googlenews');
}

function loadCollection(client, collection) {
    return client.db('conversations').collection(collection);
}

// async function loadGoogleNewsCollection() {
//     const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@cluster0.seck8.mongodb.net/conversations?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, { 
//         useNewUrlParser: true, useUnifiedTopology: true 
//     });
//     await client.connect();
//     return client.db('conversations').collection('googlenews');
// }

module.exports = router;