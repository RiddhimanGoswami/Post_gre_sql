const {pg} = require("pg");
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:2354@localhost:5432/first_sql',{
    dialectModule: pg
  })
  const abc = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  abc();