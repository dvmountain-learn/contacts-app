const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname + '/public')))

const { getContacts, createContact, updateContact, deleteContact } = require('./server/controller.js')

app.get('/api/contacts', getContacts)

app.post('/api/contacts', createContact)

app.delete('/api/contacts/:id', deleteContact)

app.listen(4040, () => {
    console.log('Server running on port 4040')
})