require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//console.log(process.env.DB_USER)




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const uri = `mongodb+srv://kish:kish@22!@cluster0.i5hoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://kish:${encodeURIComponent('kish@22!')}@cluster0.i5hoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
