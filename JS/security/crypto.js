const crypto = require("crypto")

console.log(crypto.getHashes());

crypto.getRandomBytes(16, (err, buffer) => {
    let hash; 
    hash = crypto.createHash("sha256").update("something").digest("hex")
})