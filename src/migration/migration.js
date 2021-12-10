module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '!dlgudxo90',
  database: 'lunch',
  entities: ['entity/*.js'],
  migrationsTableName: 'custom_migration_table',
  migrations: ['migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};
