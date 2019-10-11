const db = require('../data/db_config')

module.exports = {
    getProject,
    getCertainProjectWithInfo,
    getResources,
    getTasks,
    addProject,
    addResources,
    addTasks
}

function getProject() {
    return db('projects')
    // .then(proj => {
    //     proj.map(project => {
    //         if (project.completed === 1) {
    //             return project.completed = true;
    //         } else project.completed = false;
    //         return proj
    //         Boolean(project.completed)
    //     })
    // })
}

function getResources() {
    return db('resource')
}

function getTasks() {
    return db('task')
}

function addProject(project) {
    return db('projects')
    .insert(project, 'id')
}

function addResources(newResource){
    return db('resource')
    .insert(newResource, 'id')
}

function addTasks(newTask) {
    return db('task')
    .insert(newTask, 'id')
}

function getCertainProjectWithInfo(id) {
    return db('projects as p')
    .select('p.name')
    .select ('p.name', 'p.description', 'p.completed', 't.*', 'r.*')
    .join ('task as t', 't.project_id', '=', 'p.id')
    .join ('resource as r', 'r.project_id','=', 'p.id')
    .where('p.id', id)
}