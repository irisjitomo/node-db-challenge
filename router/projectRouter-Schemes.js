const db = require('../data/db_config')

module.exports = {
    getProject,
    getCertainProjectWithInfo
}

function getProject() {
    return db('projects')
    // .then(proj => {
    //     proj.map(project => {
    //         if (project.completed === 1) {
    //             project.completed = 'true';
    //         } else project.completed = 'false';
    //         return proj
    //     })
    // })
}

function getCertainProjectWithInfo(id) {
    return db('projects as p')
    .select('p.name')
    .select ('p.name', 'p.description', 'p.completed', 't.*', 'r.*')
    .join ('task as t', 't.project_id', '=', 'p.id')
    .join ('resource as r', 'r.project_id','=', 'p.id')
    .where('p.id', id)
}