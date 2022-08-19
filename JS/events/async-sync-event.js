const eventManager = require("events");

const eventEmitter = new eventManager();

eventEmitter.on("Asyncronous",(a,b)=>{
    setImmediate(()=>{
        console.log("this happens asyncronously")
    });
});

eventEmitter.on("ERROR",(err)=>{
    console.log("error")
});

eventEmitter.emit("ERROR",new Error("Whoops!"))
eventEmitter.emit("Asyncronous","a","b")