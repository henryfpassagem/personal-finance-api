import { Sequelize } from "sequelize";
const devConfig = require('./src/database/config/config.js')['development'];

const sequelize = new Sequelize(devConfig);

export default sequelize;