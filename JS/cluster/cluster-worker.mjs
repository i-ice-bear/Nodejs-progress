import cluster from 'node:cluster';

if(cluster.isPrimary){

    const worker = cluster.fork();
    worker.on("exit",(worker, code, signal)=>{
        if(signal){
            console.log(`Worker / Process ${code} is died`)
        }else if(code !== 0){
            console.log(`Worker / Process ${signal} exited with code ${code}`)
        }else{
            console.log(`Worker / Process ${signal} is working`)
        }
    })
    
}