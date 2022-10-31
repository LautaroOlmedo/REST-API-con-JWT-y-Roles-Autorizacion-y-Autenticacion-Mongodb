import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import route from '../src/routes/indexRoute.js';
import { createRol } from './libs/initialSetup';

const app = express();
createRol();
app.set('pkg', pkg); // SET nos permite declarar una variable y asiganerle un valor. Perteneciente a express
app.use(express.json());
app.use(express.urlencoded({extended: false})); // CONVIERTE LA DATA PROVENIENTE DE FORMS EN JSON
app.use(morgan('dev'));
app.use('/', route);

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

module.exports = app;