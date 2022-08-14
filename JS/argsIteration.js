//+ nodejs accepting the values from the command line;


require("dotenv").config();
process.argv.forEach((val,index)=>{
    console.log(`the value is ${val} and the index is ${index}`)
})