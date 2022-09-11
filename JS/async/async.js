const axios = require("axios")
function resolveData() {
  return new Promise((resolve) => {
    setTimeout(async () => {
        const url = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-07-28&sortBy=publishedAt&apiKey=cd6f44f57521402dab39db73fde51eb4")
        const jsonOutput = await url.json();
        console.log(jsonOutput)
    }, 2000);
  });
}

async function CallData() {
  console.log("Calling");
  const awaits = await resolveData();
  console.log(awaits);
}
CallData();
