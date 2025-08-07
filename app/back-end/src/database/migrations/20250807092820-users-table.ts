import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { User } from '../../Interfaces/User';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.literal('CURRENT_DATE')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.literal('CURRENT_DATE')
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};