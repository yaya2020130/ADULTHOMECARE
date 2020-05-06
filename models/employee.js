module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
     name: DataTypes.STRING,
     age: DataTypes.INTEGER, 
     phone_no: DataTypes.INTEGER
     
  });
  Employee.associate=function(models){
  Employee.hasMany(models.Patients,{
      foreidnKey:{
        allowNull:false
      };


  return Employee;
};