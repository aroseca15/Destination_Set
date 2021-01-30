module.exports = function (sequelize, DataTypes) {
    const Business = sequelize.define('business', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        newAquiz: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        meetings: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meetingTime: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });


    return Business;
};
