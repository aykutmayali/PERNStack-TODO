const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "perntodo",    
    user: "postgres",
    password: "1234567?"    
});

module.exports = pool;