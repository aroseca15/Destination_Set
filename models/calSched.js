module.exports = function (sequelize, DataTypes) {
    const Sched = sequelize.define('Sched', {
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        client: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        venueAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Sched.associate = function (models) {
    // We're saying that a Sched should belong to an User
    // A Sched can't be created without an User due to the foreign key constraint
        Sched.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Sched;
};


