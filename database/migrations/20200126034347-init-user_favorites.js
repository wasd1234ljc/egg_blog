'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user_favorites', {
      fav_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,
      fav_name: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('user_favorites');
  },
};
