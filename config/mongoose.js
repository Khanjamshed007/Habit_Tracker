require('dotenv').config();
const mongoose=require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_URL)


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error to connect with MongoDB"))

db.once('open',()=>{
    console.log('Connected to Database:mongodb')
})

module.exports=db;