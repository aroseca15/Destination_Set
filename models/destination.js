module.exports = function (sequelize, DataTypes) {
    const Destinations = sequelize.define('Destinations', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },

        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },

        languageUsed: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        currency: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        currencySymbol: {
            type: DataTypes.TEXT,
            allowNull: false
        },


        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });


    return Destinations;
};
