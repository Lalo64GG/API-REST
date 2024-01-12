const departmentService = require('../services/department.service');

const create = async (req, res) => {
    try {
        await departmentService.create(req.body);

        return res.status(201).json({
            message: "Departamento creado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al crear el departamento",
            error: error.message
        });
    }
}

const getAll = async (req, res) => {
    try {
        const departments = await departmentService.getAll();

        return res.status(200).json({
            message: "Departamentos obtenidos exitosamente",
            data: departments
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al consultar los departamentos",
            error: error.message
        });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await departmentService.getById(id);

        if (!department) {
            return res.status(404).json({
                message: "Departamento no encontrado"
            });
        }

        return res.status(200).json({
            message: "Departamento obtenido exitosamente",
            data: department
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al consultar el departamento",
            error: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, teamLead, techStack, projectsCompleted, employeesCount } = req.body;
        const department = await departmentService.getById(id);

        if (!department) {
            return res.status(404).json({
                message: "Departamento no encontrado"
            });
        }

        const dataToUpdate = {
            name: name || department.name,
            description: description || department.description,
            teamLead: teamLead || department.team_lead,
            techStack: techStack || department.tech_stack,
            projectsCompleted: projectsCompleted || department.projects_completed,
            employeesCount: employeesCount || department.employees_count
        }

        await departmentService.update(id, dataToUpdate);

        return res.status(200).json({
            message: "Departamento actualizado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al actualizar el departamento",
            error: error.message
        });
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await departmentService.delete(id);

        return res.status(200).json({
            message: "Departamento eliminado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al eliminar el departamento",
            error: error.message
        });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: deleteById
}
