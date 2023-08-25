const express = require('express')
const cors = require('cors')    // allows local requests from the browser
const app = express()
port = 8000

app.use(cors())
app.use(express.json());   /* This allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This allows JSON Objects with strings and arrays*/

require('./config/mongoose.config')
require('./routes/product.routes')(app)   // We're importing the routes export. 

app.listen(port, () => console.log(`Listening on port; ${port}`))