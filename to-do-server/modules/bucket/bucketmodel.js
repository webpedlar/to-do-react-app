import Sequelize from 'sequelize';
import sequelize from '../../utils/db';

const bucket = sequelize.define('bucket', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:Sequelize.TEXT, allowNull: false},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: { type:Sequelize.DATE, allowNull: true, defaultValue: null }
});

bucket.sync({ force: false }).then(function () {
    console.log('bucket table created');``
  }).catch(function (err) {
    console.error('Error while creating bucket table', err);
});

module.exports = bucket;
