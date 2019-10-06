import config from '../../config/config';
import bucketdb from './bucketdb';


module.exports.addBucket = (req, res) => {
    bucketdb.addBucket(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, data: err });
        });
}

module.exports.updateBucket = (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    
    bucketdb.updateBucket(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, data: err });
        });
}

module.exports.deleteBucket = (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    bucketdb.deleteBucket(req.body.id).then(data=>{
        return res.status(200).send({ success: true, data: data });
    })
}

module.exports.listBucket = (req, res) => {
    
    bucketdb.listBucket()
        .then((data) => {
            return res.status(200).send({success: true, data: data});
        });
}
