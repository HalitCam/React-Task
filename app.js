import GetData from "./lib/service.js";
GetData(1)
.then(data =>console.log(data))
.catch(e=>console.log("error:", e.message))
