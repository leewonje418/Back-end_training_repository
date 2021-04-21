module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define('post', {
      idx : {
        field: 'idx',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title : {
        field: 'title',
        type : DataTypes.STRING(128),
        allowNull: false,
      },
      content : {
        field: 'content',
        type : DataTypes.STRING(255),
        allowNull: false,
      },
      view : {
        field: 'view',
        type : DataTypes.INTEGER,
        default: -1,
        allowNull: false,
      },
    }, {
      timestamps: true,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
      tableName:'post',
    })
    return post;
};