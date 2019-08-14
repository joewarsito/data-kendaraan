const express = require('express')
const app = express()
require("./db") // database connection

/**
 * Import routes files
 */
const index_routes = require("./routes/index")
const kend_routes = require("./routes/kendaraans")
const users = require("./routes/users")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

/**
 * Set routes imported
 */
app.use("/index", index_routes)
app.use("/kend", kend_routes)
app.use("/user", users)

app.listen(3183, () => {
    console.log(`Example app listening on port 3183`)
})