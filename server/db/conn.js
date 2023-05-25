const mongoose = require('mongoose');

const DB = process.env.DATABASE;

//connection to MongoDB Atlas
mongoose.connect(DB , {
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true
    //useFindAndModify:false
}).then(() => {
    console.log(`Connection Successfully`);
}).catch((err) => console.log(`no connection`));