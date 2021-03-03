module.exports = function (sequelize, DataTypes) {
    const presentNote = sequelize.define('presentNote', {
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

    presentNote.associate = function (models) {
    // We're saying that a presentNotes should belong to an User
    // A presentNotes can't be created without an User due to the foreign key constraint
        presentNote.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return presentNote;
};

