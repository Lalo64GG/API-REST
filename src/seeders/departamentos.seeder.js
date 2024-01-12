const db = require('../config/db.config');

const seedDepartamentos = async () => {
    try {
        const connection = await db.createConnection();

        // Insertar datos de ejemplo
        await connection.run(`
            INSERT INTO departamentos (name, description, team_lead, tech_stack, projects_completed, employees_count)
            VALUES
                ('Desarrollo', 'Departamento de desarrollo de software', 'John Doe', 'Node.js, React', 10, 20),
                ('QA', 'Departamento de Control de Calidad', 'Jane Smith', 'Selenium, JUnit', 5, 15),
                ('Soporte Técnico', 'Departamento de Soporte Técnico', 'Alex Johnson', 'Zendesk, JIRA', 8, 25);
        `);

        console.log('Datos de departamentos insertados con éxito.');

        await connection.close();
    } catch (error) {
        console.log('Error al insertar datos de departamentos:', error);
    }
};

// Llamar a la función de seeding
seedDepartamentos();
