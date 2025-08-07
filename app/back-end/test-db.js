const { Sequelize } = require('sequelize');
const config = require('./src/database/config/config.js')['development'];

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Success: conected to the database!');
    } catch (error) {
        console.error('Error while connecting to db:', error);
    } finally {
        await sequelize.close();
    }
})();