const Student = require('./Student.js');
module.exports = (sequelize, Sequalize, DataTypes) => {
    const School = sequelize.define(
        'school', // Model Name
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            is_archived: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            }
        },

        // Options 
        {
            timestamps: false, 
        
        },
    );
    return School;
}
