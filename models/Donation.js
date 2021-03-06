const School = require('./School');
const Student = require('./Student');
module.exports = (sequelize, Sequalize, DataTypes) => {
    const Donation = sequelize.define(
        'donation', // Model Name
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true,
            },
            amount: {
                type: DataTypes.INTEGER,
            },
            payer_name: {
                type: DataTypes.STRING, 

            },
            order_id: {
                type: DataTypes.STRING,
            }

        },

        // Options 
        {
            timestamps: false, 
            underscored: true,

            createdAt: 'created_at', 

        
        },
    );
    return Donation;
}
