module.exports = function (sequelize, DataTypes) {
    const Aquiz = sequelize.define('Aquiz', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Aquiz.associate = function (models) {
        // We're saying that a Note should belong to an User
        // A Note can't be created without an User due to the foreign key constraint
        Aquiz.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Aquiz;
};
