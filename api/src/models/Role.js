import {Schema, model} from 'mongoose';

const roleSchema = new Schema({
   name: {
    type: String
   }
}, {
    //timestamps: true,
    versionKey: false // EVITA QUE LE AGREGUE UN GUIÓN 
});

export default model('Role', roleSchema);