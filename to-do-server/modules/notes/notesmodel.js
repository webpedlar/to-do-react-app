import Sequelize from 'sequelize';
import sequelize from '../../utils/db';

const notes = sequelize.define('notes', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    note_data: {type:Sequelize.TEXT, allowNull: false},
    category_id: { type: Sequelize.INTEGER, allowNull: false },
    is_completed: { type: Sequelize.STRING, allowNull: true, defaultValue: 0  },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: { type:Sequelize.DATE, allowNull: true, defaultValue: null }
});

notes.sync({ force: false }).then(function () {
    console.log('notes table created');``
  }).catch(function (err) {
    console.error('Error while creating notes table', err);
});

module.exports = notes;
