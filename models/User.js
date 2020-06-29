const Role = require('./Role.js');

module.exports = (sequelize, Sequelize, DataTypes ) => {
    const User = sequelize.define(
        'user', // name of model
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },

            first_name: {
                type: DataTypes.STRING, 
            },
            last_name: {
                type: DataTypes.STRING, 
            },
            email: {
                type: DataTypes.STRING, 
                unique: true, 
            },
            password: {
                type: DataTypes.STRING, 
                unisue: true, 
            },
            user_role: {
                type: DataTypes.INTEGER,
                references: {
                    model: Role,
                    key: 'id'
                }

            },
            deleted_at: {
                type: DataTypes.DATE, 
                allowNull: true, 
            }

        },
        { 
        // Options
        timestamp: false,
        underscored: true,
        createdAt: 'created_at',

        }
    );

    return User; 
}
