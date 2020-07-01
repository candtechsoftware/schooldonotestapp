module.exports = (sequelize, Sequelize, DataTypes ) => {
    const Admin = sequelize.define(
        'admin', // name of model
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
            is_Archived: {
                type: DataTypes.BOOLEAN,
            },
        },
        { 
        // Options
        timestamp: false,
        underscored: true,
        createdAt: 'created_at',

        }
    );

    return Admin; 
}
