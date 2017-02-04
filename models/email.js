module.exports = function (sequelize, DataTypes) {
  var Email = sequelize.define("Email", {
    email: {
      type: DataTypes.STRING,
      allowNull: false}
  });

  return Email
};
      