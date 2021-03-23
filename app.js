const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv/config')
const cors = require('cors');
const app = express()
const PORT = 5000;
const postRoutes = require('./routes/post')
const musicRoutes = require('./routes/music')
const adminRoutes = require('./routes/admin')


// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors({origin:   `http://localhost:${PORT}/`}));
app.use("/post", postRoutes);
app.use("/", musicRoutes);
app.use("/admin", adminRoutes);
// Add headers


mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
     useCreateIndex: true
}).then(_ => console.log("connected"))
.catch(err => console.log(err))

app.listen(PORT, () => {console.log("cool");})