import sequelize from '../../utils/db';
import bucketModel from './bucketmodel';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

module.exports.addBucket = (input) => {
    return new Promise((resolve, reject) => {
        bucketModel.create(input)
            .then((data) => {
                data = data.get({ plain: true });
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    });
}

module.exports.updateBucket = (input, callback) => {
    return new Promise((resolve, reject) =>{
    bucketModel.update(
        input,
        {
            where: { 'id': input.id },
            individualHooks: true
        }).then( data => {
            bucketModel.findAll({
                    attributes: ['id','name','createdAt','updatedAt'],
                    raw: false
                })
                .then((result) => {
                    resolve(result);
                });
        });
    });
}

module.exports.deleteBucket = (bucketId) => {
    return new Promise((resolve, reject) =>{
        bucketModel.destroy({ where: { id: bucketId } })
        .then((res) => {
            bucketModel.findAll({
                attributes: ['id','name','createdAt','updatedAt'],
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

module.exports.listBucket = (category_id) => {
    return new Promise((resolve, reject) =>{
        bucketModel.findAll()
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
    });
};