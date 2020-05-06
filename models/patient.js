module.exports=function(sequlize,Datatypes){
  const Patient=sequlize.define('Patient',{
    firstname:Datatypes.STRING,
    lastname:Datatypes.STRING,
    age:Datatypes.INTEGER,
    phone_number:Datatypes.INTEGER

  });
  Patient.associate=function(models){
    Patient.belongsTo(models.Manager,{
      foreidnKey:{
        allowNull:false
      };
    });
    patient.belongsToMany(models.employees,{
      foreidnKey:{
        allowNull:false
      }
    })
  };
  return patient
};