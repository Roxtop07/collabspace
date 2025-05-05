import { connect } from "node:http2";

const mongoose = require('mongoose');
const uri = "mongodb+srv://msrivastavmanish:<db_password>@collabspace.zpfm5fa.mongodb.net/?retryWrites=true&w=majority&appName=Collabspace";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
connectDB().catch(console.dir);

export default connectDB;
