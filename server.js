const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'app')))
app.use(express.json())
app.use(express.urlencoded({  extended: true }))

require('./routing/apiRoutes')(app)
require('./routing/htmlRoutes')(app)

app.listen(3002)