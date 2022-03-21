module.exports = (sequelize, Sequelize) => {
    const Site = sequelize.define("sites", {
        name: {
            type: Sequelize.STRING
        },
        scheme: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        }
    });
    return Site;
};