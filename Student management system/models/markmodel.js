const bookshelf = require('../utils/db')
const Student = require("./studentmodel")
const Mark = bookshelf.model('Mark', {
    tableName: 'mark',
    student() {
      return this.belongsTo(Student);
    }
  })
//   var Marks = bookshelf.collection('Marks',{
//     model: Mark
//   });
module.exports = Mark