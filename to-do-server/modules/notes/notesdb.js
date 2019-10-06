import sequelize from '../../utils/db';
import notesModel from './notesmodel';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

module.exports.addNote = (input) => {
    return new Promise((resolve, reject) => {
        notesModel.create(input)
            .then((data) => {
                data = data.get({ plain: true });
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    });
}

module.exports.updateNote = (input, callback) => {
    return new Promise((resolve, reject) => {
    notesModel.update(
        input,
        {
            where: { 'id': input.id },
            individualHooks: true
        }).then( data => {
            notesModel.findAll({
                    where: {
                        'category_id': input.category_id
                    },
                    attributes: ['id','note_data','category_id','is_completed','createdAt','updatedAt'],
                    raw: false
                })
                .then((result) => {
                    resolve(result);
                });
        });
    });
}

module.exports.deleteNote = (noteId,categoryId) => {
    return new Promise((resolve, reject) =>{
        notesModel.destroy({ where: { id: noteId } })
        .then((res) => {
            notesModel.findAll({
                where: {
                    'category_id': categoryId
                },
                attributes: ['id','note_data','category_id','is_completed','createdAt','updatedAt'],
                raw: false
            })
            .then((result) => {
                resolve(result);
            });
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports.listNote = (category_id) => {
    return new Promise((resolve, reject) =>{
        notesModel.findAll({
            where: {
                'category_id': category_id
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch((err) => {
            reject(err);
        })
    });
};

module.exports.updateStatus = (input, callback) => {
    return new Promise((resolve, reject) => {
    notesModel.update(
        {is_completed: input.is_completed},
        {
            where: { 'id': input.id },
            individualHooks: true
        }).then( data => {
            notesModel.findAll({
                    where: {
                        'category_id': input.category_id
                    },
                    attributes: ['id','note_data','category_id','is_completed','createdAt','updatedAt'],
                    raw: false
                })
                .then((result) => {
                    resolve(result);
                }).catch((err) => {
                    reject(err);
                });
        }).catch((err) => {
            reject(err);
        });
    });
}