module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define("Order", {

      order: {
          type: DataTypes.TEXT,
          allowNull: false
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