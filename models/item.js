module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
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
      type: DataTypes.DECIMAL,
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
  return Item;
};