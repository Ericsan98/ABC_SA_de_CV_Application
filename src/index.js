const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {mongoose} = require('./connection.database');

const path = require('path') //Viene con Node JS

const app = express();/*Se obtiene un objeto, por lo que se guarda en una constante que será el servidor*/

app.use(cors())

//Settings
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(morgan('dev'));//Me imprime todas las solicitudes en consola
app.use(express.json());//La función revisa si los datos tienen formato json, si lo es, nos dará acceso
                        //desde el código del servidor (nuestro código), además nos permitirá enviar
                        //datos en ese formato
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/employee', require('./routes/control_schedule_routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});