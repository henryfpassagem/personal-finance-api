import { Model, DataTypes, Sequelize } from 'sequelize';
import db from '.';

class userModel extends Model {
    declare id: number;
    declare username: string;
    declare email: string;
    declare password: string;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

userModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
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
}, {
    sequelize: db,
    modelName: 'users',
    timestamps: true,
});

export default userModel;