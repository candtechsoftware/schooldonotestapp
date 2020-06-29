module.exports = (sequelize, Sequalize, DataTypes) => {
    const School = sequelize.define(
        'school', // Model Name
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
            },
            name: {
                type: DataTypes.STRING,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true, 
            }
        },

        // Options 
        {
            timestamp: true, 
            createdAt: 'created_at', 
            updatedAt: 'updateda_at', 
        
        },
    );
    return School; 
}
