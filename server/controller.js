
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
            res.status(200).send(database)
        } catch (err) {
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
            database.push(obj)
            res.status(200).send(database)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}