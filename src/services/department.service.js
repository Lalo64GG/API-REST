const db = require('../config/db.config');

const create = async ({ name, description, teamLead, techStack, projectsCompleted, employeesCount }) => {
    const connection = await db.createConnection();
    const query = "INSERT INTO departamentos (name, description, team_lead, tech_stack, projects_completed, employees_count) VALUES (?, ?, ?, ?, ?, ?)";

    const result = await connection.run(query, name, description, teamLead, techStack, projectsCompleted, employeesCount);
    connection.close();

    if (result.lastID == 0) {
        throw new Error("Departamento no insertado");
    }

    return result;
}

const getAll = async () => {
    const connection = await db.createConnection();
    const query = "SELECT id, name, description, team_lead, tech_stack, projects_completed, employees_count FROM departamentos";

    const result = await connection.all(query);
    connection.close();

    return result;
}

const getById = async (id) => {
    const connection = await db.createConnection();
    const query = "SELECT id, name, description, team_lead, tech_stack, projects_completed, employees_count FROM departamentos WHERE id = ?";

    const result = await connection.get(query, id);
    connection.close();

    return result;
}

const update = async (id, { name, description, teamLead, techStack, projectsCompleted, employeesCount }) => {
    const connection = await db.createConnection();
    const query = "UPDATE departamentos SET name = ?, description = ?, team_lead = ?, tech_stack = ?, projects_completed = ?, employees_count = ? WHERE id = ?";

    const result = await connection.run(query, name, description, teamLead, techStack, projectsCompleted, employeesCount, id);
    connection.close();

    if (result.changes == 0) {
        throw new Error("Departamento no actualizado");
    }

    return result;
}

const deleteById = async (id) => {
    const connection = await db.createConnection();
    const query = "DELETE FROM departamentos WHERE id = ?";

    const result = await connection.run(query, id);
    connection.close();

    if (result.changes == 0) {
        throw new Error("Departamento no eliminado");
    }

    return result;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteById,
}
