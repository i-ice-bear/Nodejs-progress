const fs = require("fs")

function readfiles(){
    fs.readdir("generated", (err,data)=>{
        console.log(data)
    })
}

module.exports = {
    readfiles
}