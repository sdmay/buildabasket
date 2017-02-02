module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define("Order", {

      order: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      totalcost: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      orderedforanniversary: {
          type: DataTypes.BOOLEAN
      },
      orderedforbirthday: {
          type: DataTypes.BOOLEAN
      },
      ShipAddress: {
        type: DataTypes.TEXT
      },
      BillingAddress: {
        type: DataTypes.TEXT
      },
      Shipped:{
        type: DataTypes.BOOLEAN
      }
  },
    {
      classMethods: {
        associate: function(models) {
          Order.belongsTo(models.User,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    });
return Order;

  }