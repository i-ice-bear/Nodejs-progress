import * as fs from 'fs';
import express from 'express';
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) =>{
    res.statusCode = 200
    var staticSite;
    staticSite = fs.readFileSync("html/static.html")
    res.send(staticSite.toString())
})
app.get('/index', (req, res) =>{
    res.statusCode = 200
    var staticSite;
    staticSite = fs.readFileSync("html/index.html")
    res.send(staticSite.toString())
})
app.get('/cocktails', (req, res) =>{
    res.statusCode = 200
    var staticSite;
    staticSite = fs.readFileSync("html/out/static.html")
    res.send(staticSite.toString())
})
app.get('*', (req, res) =>{
    res.statusCode = 400
    res.send(`<h1>I didn't found anything sorry!</h1>`)
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})