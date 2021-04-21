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
      post_id: {
        field: 'post_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      timestamps: false,
      paranoid: true,
      charset:'utf8',
      collate:'utf8_general_ci',
      tableName:'post',
    })
    return post;
};