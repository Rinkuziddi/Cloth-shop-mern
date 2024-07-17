const mongoose = require('mongoose');

const mongo_url = "mongodb://127.0.0.1:27017/shop";

mongoose.connect(mongo_url).then(()=>{
    console.log("MongoDB is Connected");
}).catch((err) => {
    console.log("ERROR",err);
});

