const ProjectModel = require('../model/ProjectModel')
const Upper = require('../util/Upper')
const {
    startOfMonth, endOfMonth, startOfYear, endOfYear
} = require('date-fns')

class ProjectController {

    async count(req, res) {
        let condiction = {}

        await ProjectModel.countDocuments(condiction)
            .then(response => {
                return res.status(200).json(response)
            }).catch(error => {
                return res.status(500).json(error)
            })
        // res.send("get")
    }

    async create(req, res) {
        const body = Upper.body(req.body)

        const project = new ProjectModel(body)

        await project.save()
            .then(response => {
                res.status(200).json(response)

            }).catch(error => {
                res.status(500).json(error)
            })
    }

    async read(req, res) {

        let condiction = {}

        await ProjectModel.find(condiction)
            .sort('begin')
            .then(response => {
                res.status(200).json(response)

            }).catch(error => {
                res.status(500).json(error)
            })

    }
    async update(req, res) {
        const body = Upper.body(req.body)

        await ProjectModel.findByIdAndUpdate(
            { '_id': req.params.id },
            body,
            { new: true }
        ).then(response => {
            return res.status(200).json(response)

        }).catch(error => {
            return res.status(500).json(error)
        })
    }
    async delete(req, res) {
        await ProjectModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)

            }).catch(error => {
                return res.status(500).json(error)
            })
    }
    async show(req, res) {
        await ProjectModel.findById(req.params.id)
            .then(response => {

                if (response) {
                    return res.status(200).json(response)
                }
                return res.status(404).json({ "error": "[Project Not Found]" })
            }).catch(error => {
                return res.status(500).json(error)

            })
    }

    // async count(req, res) {
    //     let condiction = {}

    //     await ProjectModel.countDocuments(condiction)
    //         .then(response => {
    //             return res.status(200).json(response)
    //         }).catch(error => {
    //             return res.status(500).json(error)
    //         })
    // }

    async finish(req, res) {
        const date = req.body.finish ? req.body.finish : new Date()

        await ProjectModel.findByIdAndUpdate(
            { '_id': req.params.id },
            { 'finish': date },
            { new: true }
        ).then(response => {
            return res.status(200).json(response)

        }).catch(error => {
            return res.status(500).json(error)
        })
    }

    async filter_type(req, res) {
        let condiction = {
            type: { '$in': req.params.value }
        }

        await ProjectModel.find(condiction)
            .sort('begin')
            .then(response => {
                res.status(200).json(response)

            }).catch(error => {
                res.status(500).json(error)
            })
    }
    async filter_finish(req, res) {
        let condiction = {
            finish: { '$exists': req.params.value }
        }

        await ProjectModel.find(condiction)
            .sort('begin')
            .then(response => {
                res.status(200).json(response)

            }).catch(error => {
                res.status(500).json(error)
            })
    }
    async filter_month(req, res) {
        let today = new Date()
        // console.log(startOfMonth(today))
        // console.log(endOfMonth(today))
        await ProjectModel.find({
            'begin': { "$gte": startOfMonth(today), '$lt': endOfMonth(today) }
        }).sort('begin').then(response => {
            res.status(200).json(response)

        }).catch(error => {
            res.status(500).json(error)
        })

    }
    async filter_year(req, res) {
        let today = new Date()
        // console.log(startOfMonth(today))
        // console.log(endOfMonth(today))
        await ProjectModel.find({
            'begin': { "$gte": startOfYear(today), '$lt': endOfYear(today) }
        }).sort('begin').then(response => {
            res.status(200).json(response)

        }).catch(error => {
            res.status(500).json(error)
        })
    }

}

module.exports = new ProjectController()