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
            student_id: {
                type: DataTypes.INTEGER,
                refernces: {
                    model: Student,
                    key: 'id'
                },
            },
       
            school_id: {
                type: DataTypes.INTEGER, 
                refernces: {
                    model: School, 
                    key: 'id'
                },
            },

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
