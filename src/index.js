/*
CRUD:  createUser, getUserById, updateUser, deleteUser
(Sequelize: create, findByPk, update, )
---
getAllUsers
getUserByLogin
*/

// const { User } = require("./db/models");
const bcrypt = require('bcrypt');
const { User, Task } = require("./db/models");
//const bcrypt = require('bcrypt');

/*
const hashPasswordFun = async password => {
    try{
        return bcrypt.hash(password, 10);
    }catch(e){
        throw e;
    }
}
const createUser = async data => {
    try{
        data.passwordHash = await hashPasswordFun(data.password);
        const newUser = await User.create(data);
        return newUser;
    } catch(e){
        throw e;
    }
}
/*
const data = {
    firstName: 'Vasya',
    lastName: 'Test',
    email: "vasya@mail.com",
    login: 'vasya1',
    age: 20,
    password: 'admin'
};
createUser(data).then(console.log).catch(console.err);
*/

/*
const getUserById = async id => {
    try{
        const foundUser = await User.findByPk(id);
        return foundUser;
    } catch(e){
        throw e;
    }
}
//getUserById(55).then(console.log).catch(console.err);
//getUserById(100).then(console.log).catch(console.err);
//getUserById(101).then(console.log).catch(console.err);
const getAllUsers = async data => {
    const {limit, offset} = data;
    try{
        const users = await User.findAll({
            limit, //limit: limit,
            offset, //offset: offset,
            attributes: {
                exclude: ['passwordHash', 'createdAt', 'updatedAt']
            }
        });
        return users;
    } catch(e){
        throw e;
    }
}
//getAllUsers({limit: 3, offset: 50}).then(console.log).catch(console.err);
const deleteUser = async id => {
    try{
        const foundUser = await User.destroy({
            where: {
                id: id
            }
        });
        return foundUser;
    } catch(e){
        throw e;
    }
}
//deleteUser(1).then(console.log).catch(console.err);
//getAllUsers({limit: 3, offset: 0}).then(console.log).catch(console.err);
// function updateUserById(req, res, next) {}
// id: req.params.userId
// data:  req.body
const updateUser = async (id, data) => {
    try{
        const [updatedRowCount, updatedRows] = await User.update(
            data, 
            {where: {id: id},
            returning: true,
        });
        if(updatedRowCount){
            const user = updatedRows[0].get();
            delete user.password;
            return user;
        }
    } catch(e){
        throw e;
    }
}
console.log('Ищем 3 человека. инфа');
getUserById(3).then(console.log).catch(console.err);
console.log('Ищем 3 человека. обновление');
updateUser(3, {email: "new3@mail.com", age: 25}).then(console.log).catch(console.err);
console.log('Ищем 3 человека. инфа после обновления');
getUserById(3).then(console.log).catch(console.err);
/************** TASKS */
// CRUD
// createTask, getTaskById, updateTaskById, deleteTaskById
// getAllTasks

// task {}  :
// [id, createdAt, updatedAt],
// userId, name, isDone, deadline

// createTask function
const createTask = async (data) => {
  try {
    const newTask = await Task.create(data);
    return newTask;
  } catch (e) {
    throw e;
  }
};
// getTaskById function
const getTaskById = async (id) => {
  try {
    const foundTask = await Task.findByPk(id);
    return foundTask;
  } catch (e) {
    throw e;
  }
};
// updateTaskById function
const updateTaskById = async (id, data) => {
  try {
    const [updatedRowCount, updatedRows] = await Task.update(data, {
      where: { id: id },
      returning: true,
    });
    if (updatedRowCount) {
      const task = updatedRows[0].get();
      return task;
    }
  } catch (e) {
    throw e;
  }
};
// deleteTaskById function
const deleteTaskById = async (taskId) => {
  try {
    const foundTask = await Task.destroy({
      where: {
        id: taskId,
      },
    });
    return foundTask;
  } catch (e) {
    throw e;
  }
};

// getAllTasks function

const getAllTasks = async (data) => {
  const { limit, offset } = data;
  try {
    const tasks = await Task.findAll({
      limit: limit || 5,
      offset: offset || 0,
      order: ["deadline"],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return tasks;
  } catch (e) {
    throw e;
  }
};

const testTask = {
  UserId: 12,
  name: "test task for #user",
  isDone: false,
  deadline: "2022-12-10 14:00",
};

createTask(testTask).then(console.log).catch(console.err);
getTaskById(3).then(console.log).catch(console.err);
updateTaskById(3, {isDone: true}).then(console.log).catch(console.err);
getTaskById(3).then(console.log).catch(console.err);
deleteTaskById(3).then(console.log).catch(console.err);

//getAllTasks({}).then(console.log);

// getTaskByUserId
/*
const getTaskByUserId = async (userId) => {
  try {
    const tasks = await Task.findAll({
      order: ["deadline"],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        UserId: userId,
      },
    });
    return tasks;
  } catch (e) {
    throw e;
  }
};
getTaskByUserId(12).then(console.log).catch(console.err);
*/

async function getUsersWithTasks(){
    try{
        const result = User.findAll({
            attributes: {
                exclude: ['passwordHash']
            },
            include: [
                {
                    model: Task,
                }
            ]
        });
        //return result.map(i => i.get());
        return result;
    } catch(e){
        throw e;
    }
}

//getUsersWithTasks().then(console.log);

async function getTasksWithUsers(){
    try{
        const result = Task.findAll({
            where: {},
            include: [
                {
                    model: User,
                    as: 'owner'
                }
            ]
        });
        //return result.map(i => i.get());
        return result;
    } catch(e){
        throw e;
    }
}

// getTasksWithUsers().then(console.log);
