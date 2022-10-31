import app from './app.js';
import './database.js'


const init = async() =>{
    
    await app.listen(3000), 
    console.log('Server listening on port 3000');
};

init();