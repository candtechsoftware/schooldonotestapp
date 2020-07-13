const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


const app = express();


// Middlewars
app.use(cors()); // Enable Cors
app.use(morgan('dev')); // Enable Logging
app.use(helmet()); // Enables Security Headers
app.use(bodyParser.json()); // Parses requrests of type application/json
app.use(bodyParser.urlencoded({ extended: true})); // Parses request of application/x-www-form-urlencode 


//Add database connection
const db = require('./models');
//db.sequelize.sync().then(()=> initial())

// Routing

app.get('/', (req, res)=> res.json({message: "Base API URL"})); 

const api = require('./routes/routes.js');


app.use('/api', api );



const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
