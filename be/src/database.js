const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

process.on("SIGINT", () => {
  console.log("Shutting down...");
  pool.end(() => {
    console.log("Pool has been closed.");
    process.exit(0);
  });
});

module.exports = pool;
