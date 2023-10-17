
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
            // print;
            rollbar.log('Welcome to visit our website.')
            res.status(200).send(database)
        } catch (err) {
            rollbar.error(`Couldn't load contact information: ${err}`)
            res.status(400).send(err)
        }
    },

    createContact: (req, res) => {

        const { name, tel} = req.body
        try {
            const obj = {
                id: autoId,
                name: name,
                tel: tel
            }
            rollbar.warning(obj)
            database.push(obj)
            res.status(200).send(database)
        } catch (err) {
            rollbar.error(err)
            res.status(400).send(err)
        }
    },

    updateContact: (req, res) => {
        console.log(req.body)
    },

    deleteContact: (req, res) => {
        try { 
            const index = database.findIndex(item => item.id === +req.params.id)
            database.splice(index, 1)
            rollbar.critical('Are ready to delete contact at ' + index)
            res.status(200).send(database)
        } catch (err) {
            rollbar.error(err)
            res.status(400).send(err)
        }
    }
}