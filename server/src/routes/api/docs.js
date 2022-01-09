// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
//   }
require('custom-env').env('local');

const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();

// Get Docs
router.get('/', async (req, res) => {
    // res.send('test');
    const docs = await loadGoogleNewsCollection().catch(console.error);
    res.send(await docs.find({}).toArray());
});


// async function loadDocs() {
//     const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@cluster0.seck8.mongodb.net/conversations?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, { 
//         useNewUrlParser: true, useUnifiedTopology: true 
//     });

//     try {
//         // Connect to Mongo cluster
//         await client.connect();

//         // Load in all GoogleNews docs
//         return await loadGoogleNewsCollection(client).catch(console.error);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function loadGoogleNewsCollection(client) {
//     return client.db('conversations').collection('googlenews');
// }

async function loadGoogleNewsCollection() {
    const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@cluster0.seck8.mongodb.net/conversations?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { 
        useNewUrlParser: true, useUnifiedTopology: true 
    });
    await client.connect();
    return client.db('conversations').collection('googlenews');
}

module.exports = router;