import cocoDetection from '@tensorflow-models/coco-ssd';
import * as fs from 'fs';

Promise.all([cocoDetection.load(), fs.readFile("/detection.jpg")])
.then((results)=>{
    const model = results[0]
    console.log(model)
})


console.log(cocoDetection)


//! Its a half module to run because of the failure of installation of ,
//TODO: main tensorflow module