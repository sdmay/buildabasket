module.exports = function (sequelize, DataTypes) {
  var Faq = sequelize.define("Faq", {
       
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.TEXT
    }





  })
  return Faq;
}