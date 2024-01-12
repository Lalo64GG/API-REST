const db = require('../config/db.config');

(async () => {
    try {
        const connection = await db.createConnection();
        
        await connection.run(`
            CREATE TABLE IF NOT EXISTS departamentos (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT NOT NULL,
                team_lead TEXT NOT NULL, -- Nombre del líder del equipo
                tech_stack TEXT NOT NULL, -- Tecnologías utilizadas en el departamento
                projects_completed INTEGER NOT NULL, -- Proyectos completados por el departamento
                employees_count INTEGER NOT NULL -- Número de empleados en el departamento
            );
        `);

        console.log('Tabla de departamentos creada con éxito.');
        
        await connection.close();
    } catch (error) {
        console.log('Error al crear tabla de departamentos:', error);
    }
})();
