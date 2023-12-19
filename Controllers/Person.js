const Person = require('../Models/Person')

async function getAllPeople(req, res) {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting all people' })
    }
}

async function getPersonById(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        res.json(person)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error getting person' })
    }
}

async function createPerson(req, res) {
    try {
        await new Person({...req.body}).save()
        res.status(201).json({ message: 'user created' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error creating person' })
    }
}

async function deletePerson(req, res) {
    try {
        const { id } = req.params
        const person = await Person.findByIdAndDelete(id)
        res.json(person)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error deleting person' })
    }
}

module.exports = {
    getAllPeople,
    getPersonById,
    createPerson,
    deletePerson
}