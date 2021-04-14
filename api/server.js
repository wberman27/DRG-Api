const express = require("express");
const overclocksRouter = require('./overclocks/overclocks-router');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json());
server.use('/api/overclocks', overclocksRouter);
server.use(express.static(path.join(__dirname,'client/build')))

server.get('/api/', (_, res)=>{
    res.status(200).json("API is running")
})

module.exports = server;
