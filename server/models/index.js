import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../../config.json')[env];

const db = {}; 
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User, {foreignKey: 'user_id'});

module.exports = db;