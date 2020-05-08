module.exports =function(sequelize,Datatypes){
  const Manager=sequlize.define('Manager',{
   name:Datatypes.STRING,
   age:Datatypes.STRING
})
// each manager can have many employees under him
Manager.associate=function(models){
Manager.hasMany(models.Employee,{
  foreignkey:{
    allowNull:false
  }
})
}
return Manager;

}