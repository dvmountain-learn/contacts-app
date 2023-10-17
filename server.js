const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname + '/public')))

const { getContacts } = require('./server/controller.js')

app.get('/api/contacts', getContacts)

app.listen(4000, () => {
    console.log('Server running on port 4000')
})