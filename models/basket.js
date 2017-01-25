module.exports = function(sequelize, DataTypes) {
  var Basket = sequelize.define("Basket", {
    basket_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {len: [1]
      }
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        }
  },
    

    {
      classMethods: {
        associate: function(models) {
          Basket.belongsTo(models.User,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    });
  return Basket;
};