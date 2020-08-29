module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./data/"
        },
        migration: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        },
        pool: {
            afterCreation: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done)
            }
        }
    }
}