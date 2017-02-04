

module.exports = function (sequelize, DataTypes) {
    var OrderItems = sequelize.define("OrderItems", {
        order: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: function (models) {
                    OrderItems.belongsTo(models.Order,
                        {
                            onDelete: "cascade",
                            foreignKey: {
                                allowNull: false
                            }
                        });
                    OrderItems.belongsTo(models.Item);
                }
            }
        });
    return OrderItems;

}