const {User} = require('./db/models');

// User.create({
//     name: 'Test2',
//     surname: 'Test2',
//     email: 'test2@mail.com'
// }).then(console.log);

// User.findByPk(1).then(console.log);

User.findAll({attributes: {exclude: ["createdAt","updatedAt"]}}).then(console.log);