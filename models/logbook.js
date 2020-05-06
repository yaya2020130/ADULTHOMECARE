module.exports=function(sequlize,Datatypes){
  const Logbook=sequlize.define('Logbook',{
   name:Datatypes.String,
   date:Datatypes.date,
   status:Datatypes.String,
   isAlive:Datatypes.Boolean,
   photoTaken:Datatypes.Boolean,
    loggedBy: Datatypes.Integer,
  });
   Logbook.associate=function(models){
    Logbook.belongs(models.Patient,{
       foreignKey:{
         allowNull:false
       }
     });
   };
  return Logbook
};