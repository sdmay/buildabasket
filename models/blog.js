module.exports = function (sequelize, DataTypes) {
  var Blog = sequelize.define("Blogs", {
       
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    }





  })
  return Blog;
}