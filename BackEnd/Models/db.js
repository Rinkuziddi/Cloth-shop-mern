const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://Rinku:Admin%40123@cloth-shop.odeu3na.mongodb.net/shop";

mongoose.connect(mongo_url).then(()=>{
    console.log("MongoDB is Connected");
}).catch((err) => {
    console.log("ERROR",err);
});

