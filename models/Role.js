module.exports = (sequelize, Sequalize, DataTypes) => {
    const Role = sequelize.define(
        'user_role', // Model Name
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
            },
            name: {
                type: DataTypes.STRING,
            }
        },

        // Options 
        {
            timestamp: true, 
            createdAt: 'created_at', 
            updatedAt: 'updateda_at', 
        
        },
    );
    return Role; 
}
