//import json-server library in index.js

const jsonServer = require('json-server')

//create server using json-server library

const videoPlayerServer = jsonServer.create()

//create path to db.json file

const router = jsonServer.router('db.json')

//middlewares to convert js to json

const middleware = jsonServer.defaults()

//connect/use middleware and router in server

videoPlayerServer.use(middleware)
videoPlayerServer.use(router)

//setup port for server [json server by default  runs at 3000 server , So don't give 3000]

const port = 4001 || process.env.PORT


//to listen server for resolving request

videoPlayerServer.listen(port,()=>{
 console.log(`videoPlayerServer started at ${port} and ready fetch request`);
})


