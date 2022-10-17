import * as fs from 'fs';
import axios from 'axios';
import eventsMaker from 'events';

const eventEmitter = new eventsMaker();

const handler = () => {
    eventEmitter.on("Generate-data", (stream) => {
        const generateData = async () => {
            const urlToFetch = await axios.get("https://randomuser.me/api/")
            let directoryLength;
            directoryLength = await fs.promises.readdir("sysinfo");
            console.log(directoryLength)
            const data = urlToFetch.data
            fs.promises.writeFile(`sysinfo/news-${directoryLength.length + 1}.json`, JSON.stringify(data), (err, data) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Success")
                }
            })
        }
        generateData()
    })
    setTimeout(() => {
        eventEmitter.emit("Generate-data")
    }, 1000);
}
handler()