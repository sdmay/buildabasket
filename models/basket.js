module.exports = function (sequelize, DataTypes) {
  var Basket = sequelize.define("Basket", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Basket;
};