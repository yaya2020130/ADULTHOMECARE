module.exports=function(sequlize,Datatypes){
  const Logbook=sequlize.define('Logbook',{
   name:Datatypes

  });
 Loogbook.associate=function(models){
   Logbook.belongs(models.Manager,{
      foreignKey:{
        allowNull:false
      }
    });
  };
  Loogbook.associate=function(models){
    Logbook.belongs(models.Employee,{
       foreignKey:{
         allowNull:false
       }
     });
   };
   Loogbook.associate=function(models){
    Logbook.belongs(models.Patient,{
       foreignKey:{
         allowNull:false
       }
     });
   };
  return Loogbook
};