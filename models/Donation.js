const School = require('./School');
const Student = require('./Student');
module.exports = (sequelize, Sequalize, DataTypes) => {
    const Donation = sequelize.define(
        'donation', // Model Name
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
            },
            amount: {
                type: DataTypes.INTEGER,
            }

        },

        // Options 
        {
            timestamp: true, 
            createdAt: 'created_at', 
            updatedAt: 'updateda_at', 
        
        },
    );
    return Donation;
}
