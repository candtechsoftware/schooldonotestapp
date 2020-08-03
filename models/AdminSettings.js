module.exports = (sequelize, Sequelize, DataTypes ) => {
    const AdminSettings = sequelize.define(
        'admin_settings', // name of model
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            setting: {
                type: DataTypes.STRING, 
            },
            value: {
                type: DataTypes.STRING, 
            },


        },
        { 
        // Options
        timestamp: false,
        underscored: true,
        createdAt: 'created_at',

        }
    );

    return AdminSettings; 
}
