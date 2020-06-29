module.exports = (sequelize, Sequalize, DataTypes) => {
    const Teacher = sequelize.define(
        'teacher', // Model Name
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
            }       },

        // Options 
        {
            timestamp: true, 
            createdAt: 'created_at', 
            updatedAt: 'updateda_at', 
        
        },
    );
    return Teacher; 
}
