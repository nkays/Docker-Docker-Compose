const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// function handleIndex () {
//     res.send("Heeello")
// }

app.get("/", (req, res)=>{
    res.send("express-aPp")
})

app.get("/world", (req, res)=>{
    res.send("the express-aPp")
})

app.listen(port, (req, res)=>{
    console.log('Listening on http://localhost:${port}')
})