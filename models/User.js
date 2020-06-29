const Role = require('./Role.js');

module.exports = (sequelize, Sequelize, DataTypes ) => {
    const User = sequelize.define(
        'user', // name of model
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
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
        timestamps: true, 
        createdAt: 'created_at',
        updated_at: 'last_login', 

        }
    );

    return User; 
}
