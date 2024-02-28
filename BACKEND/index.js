const express = require('express');
const app = express();
 require ('dotenv').config();
 const PORT =  process.env.PORT || 4000;
const cors = require('cors');
 app.use(express.json())
app.use(cors());

require('./config/database').connect();

// app.use((req, res, ) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// });
// import route and mount 
const user = require('./routes/user');
app.use('/api/v1',user);

// start app
app.listen(PORT , ()=> {
    console.log(`App is listening on port ${PORT}`);
});