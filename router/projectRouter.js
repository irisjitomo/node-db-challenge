const express = require('express')

const projects = require('./projectRouter-Schemes')

const router = express.Router()


router.post('/projects', (req, res) => {
    projects
    .addProject(req.body)
    .then(proj => {
        res.json(proj)
    })
})

router.post('/resources', (req, res) => {
    projects
    .addResources(req.body)
    .then(reso => {
        res.json(reso)
    })
})

router.post('/tasks', (req, res) => {
    projects
    .addTasks(req.body)
    .then(task => {
        res.json(task)
    })
})

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

router.get('/resources', (req, res) => {
    projects
    .getResources()
    .then(proj => {
        res.json(proj)
    })
})

router.get('/tasks', (req, res) => {
    projects
    .getTasks()
    .then(proj => {
        res.json(proj)
    })
})


module.exports = router