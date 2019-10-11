const express = require('express')

const projects = require('./projectRouter-Schemes')

const router = express.Router()

router.get('/projects', (req, res) => {
    projects
    .getProject()
    .then(proj => {
        res.json(proj)
    })
})

router.get('/projects/:id', (req, res) => {
    projects
    .getCertainProjectWithInfo(req.params.id)
    .then(proj => {
        res.json(proj)
    })
})


module.exports = router