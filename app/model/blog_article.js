'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        TEXT,
    } = app.Sequelize;

    const BlogArticle = app.model.define('blog_articles', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        typeid: INTEGER,
        title: STRING(255),
        userid: INTEGER,
        article_content: TEXT,
        introduce: TEXT,
        createdAt: DATE,
        updatedAt: DATE,
        view_count: { type: INTEGER, defaultValue: 0 }

    });

    BlogArticle.associate = function () {
        app.model.BlogArticle.hasOne(app.model.BlogType, { foreignKey: 'id', sourceKey: 'typeid' })
        app.model.BlogArticle.hasOne(app.model.User, { foreignKey: 'id', sourceKey: 'userid' })
        app.model.BlogArticle.hasMany(app.model.Comments, { foreignKey: 'article_id', sourceKey: 'id' })
        app.model.BlogArticle.hasMany(app.model.CommentsToComments, { foreignKey: 'article_id', sourceKey: 'id' })


        app.model.BlogArticle.belongsTo(app.model.User, {
            foreignKey: 'userid',
            targetKey: 'id'
        })
        app.model.BlogArticle.belongsTo(app.model.ArticleFavorites, {
            foreignKey: 'id',
            targetKey: 'article_id'
        })


    }
    // BlogArticle.associate = function () {

    // }

    return BlogArticle;
};