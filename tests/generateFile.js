const fs = require("fs");
const eventManager = require("events");

const eventEmitter = new eventManager();

const eventCommitter  = async () => {
  const dataString = { name: "name", age: "age" };
  
 await eventEmitter.on("Generate-files", async () => {
    const readDirectory = await fs.promises.readdir("generated")
    const generateFileCache = await fs.promises.writeFile(`../generated/report-${readDirectory.length + 1}.json`,JSON.stringify(dataString),(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)   
        }
    });
  });
  eventEmitter.emit("Generate-files")
};

eventCommitter()




//+ this test fails completely