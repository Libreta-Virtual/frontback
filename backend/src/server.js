const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const usuarioRutas = require('./routes/usuarios.routes')
const servicioRutas = require('./routes/servicios.routes')

const app = express();
app.set('port', process.env.PORT || 4000);

const listaRutas = ["http://localhost:3000"]

const corsOptions = {
  origin: function(origin, callback) {
    if(!origin || listaRutas.indexOf(origin) !== -1){
        callback(null, true)
    } else {
      callback(new Error("No soportable por CORS"))
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", usuarioRutas, servicioRutas)
//app.use("/servicios", servicioRutas)



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });