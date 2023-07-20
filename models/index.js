const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 30]
        }
    }
});

const BlogPost = sequelize.define('blogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 160]
        }
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
});

const Comment = sequelize.define('comment', {
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
});
