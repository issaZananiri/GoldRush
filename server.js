
const parser=require("body-parser")
const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => console.log(`Running server on port ${port}`))