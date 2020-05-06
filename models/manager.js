module.exports =function(sequelize,Datatypes){
  const Manger=sequlize.define('Manager',{
   name=Datatypes.STRING,
   age=Datatypes.STRING


})
// each manager can have many employees under him
Manager.associate=function(models){
Manager.hasmany(models.Employee,{
  foreignkey:{
    allowNull:false
  }
})
}
return Manger;

}