module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
     name: DataTypes.STRING,
     age: DataTypes.INTEGER, 
     phone_no: DataTypes.INTEGER
     
  });



  return Employee;
};