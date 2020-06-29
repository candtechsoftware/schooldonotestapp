const School = require('./School');
const Teacher = require('./Teacher');
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Student = sequelize.define(
        'student', // Model Name
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true, 
                primaryKey: true, 
            },
            phone: {
                type: DataTypes.STRING, 
            },
            shirt_size: {
                type: DataTypes.STRING,
            },
            grade: {
                type: DataTypes.STRING,
            },

            school_id: {
                type: DataTypes.INTEGER,
                refernces: {
                    model: School,
                    key: 'id',
                },

            },
            teacher_id: {
                type: DataTypes.INTEGER,
                refernces: {
                    model: Teacher, 
                    key: 'id', 
                }
            },
            

            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true, 
            },

        },
        
        // Options
        {
            timestamps: true, 
            created_at: 'created_at',
            updated_at: 'updated_at'
        }

    );

    return Student; 
}
