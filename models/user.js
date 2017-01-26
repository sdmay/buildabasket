module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  
  {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Order);
      }
    }
  });
  return User;
};