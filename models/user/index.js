module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        job_title: {
            type: Sequelize.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        age: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        location: {
            type: Sequelize.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        description: {
            type: Sequelize.STRING(500),
            allowNull: false,
            validate: {
                notEmpty: false,
                len: {
                    args: [10, 500],
                    msg: 'Panjang description minimal 10 - 500 karakter'
                }
            }
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(500)
        },
    });

    return User;
};