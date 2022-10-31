import mongoose from 'mongoose'

mongoose.connect("mongodb://Localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error));
    