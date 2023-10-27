const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

const app = express()

const apiTarget = process.env.TARGET_URL

// Create a proxy middleware that forwards requests to the target API
const apiProxy = createProxyMiddleware({ target: apiTarget, changeOrigin: true })

// Use the proxy middleware for all routes
app.use('/', apiProxy)

app.listen(process.env.PORT || 55771, () => {
    console.log(`Started Reverse proxy server at: http://127.0.0.1:${process.env.PORT || 55771}`)
})
