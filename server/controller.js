
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '82bd3f1c606b4d3289c664b6f31b6ce2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const database = [
    {
        id: 1,
        name: 'John',
        tel: '273777370'
    },
    {
        id: 2,
        name: 'Jorlena',
        tel: '307449492'
    },
    {
        id: 3,
        name: 'Joshua',
        tel: '737370003'
    }
]
const autoId = database.length + 1


module.exports = {
    getContacts: (req, res) => {
        try {
            rollbar.log('Welcome to visit our website.')
            res.status(200).send(database)
        } catch (err) {
            rollbar.error(err)
            res.status(400).send(err)
        }
    },

    createContact: (req, res) => {
        console.log(req.body)
        const { name, tel} = req.body
        try {
            const obj = {
                id: autoId,
                name: name,
                tel: tel
            }
            rollbar.info(obj)
            database.push(obj)
            res.status(200).send(database)
        } catch (err) {
            rollbar.error(err)
            res.status(400).send(err)
        }
    }
}