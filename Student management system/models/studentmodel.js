const bookshelf = require('../utils/db')
var Student = bookshelf.model('Student',{
    tableName: "student",
    mark() {
      return this.hasMany('Mark');
    }
});
// var Students = bookshelf.collection('Students',{
//     model: Student
// });

module.exports = Student