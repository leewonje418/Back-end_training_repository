module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      idx : {
        field: 'idx',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id : {
        field: 'id',
        type : DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password : {
        field: 'password',
        type : DataTypes.STRING(128),
        allowNull: false,
      },
      username : {
        field: 'username',
        type : DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      email : {
        field: 'email',
        type : DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      }
    }, {
      timestamps: false,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
      tableName:'user',
    })
    return user;
};