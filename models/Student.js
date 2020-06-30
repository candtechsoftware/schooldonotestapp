const School = require('./School');
const Teacher = require('./Teacher');
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Student = sequelize.define(
        'student', // Model Name
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

            teacher: {
                type: DataTypes.STRING,
            },
            is_Archived: {
                type: DataTypes.BOOLEAN,
            },

        },
       
        // Options
        {
            timestamps: true, 
            underscored: true,
            created_at: 'created_at',
        }

    );
    Student.associate = (models) => {
        models.Student.belongsTo(models.School,{
              onDelete: "CASCADE",
              foreingKey: {
                allowNull: false,
                }
        })
    }
    return Student; 
}
