module.exports = function (sequelize, DataTypes) {
    const postMeetOb = sequelize.define('postMeetOb', {
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

    postMeetOb.associate = function (models) {
    // We're saying that a postMeetOb should belong to an User
    // A postMeetOb can't be created without an User due to the foreign key constraint
        postMeetOb.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return postMeetOb;
};

