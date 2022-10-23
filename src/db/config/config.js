module.exports = {
  development: {
    username: process.env.DB_USER || "yevhen",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "todo_pd2022",
    host:     process.env.DB_HOST || "127.0.0.1",
    port:     process.env.DB_PORT || "5432",
    dialect:  process.env.DB_DIALECT || "postgres",
  },
  test: {},
  production: {}
}
