const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const apiTarget = process.env.TARGET_URL

app.use('*', (req, res) => {
    res.redirect(`${apiTarget}${req.baseUrl}`)
});

app.listen(process.env.PORT || 55771, () => {
    console.log(`Started addon server at: http://127.0.0.1:${process.env.PORT || 55771}`)
})
