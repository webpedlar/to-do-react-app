import config from '../../config/config';
import notesdb from './notesdb';


module.exports.addNote = (req, res) => {
    notesdb.addNote(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, data: err });
        });
}

module.exports.updateNote = (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    
    notesdb.updateNote(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, data: err });
        });
}

module.exports.deleteNote = (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    notesdb.deleteNote(req.body.id,req.body.category_id).then(data=>{
        return res.status(200).send({ success: true, data: data });
    })
}

module.exports.listNote = (req, res) => {
    if (!req.params.cat_id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    notesdb.listNote(req.params.cat_id)
        .then((data) => {
            return res.status(200).send({success: true, data: data});
        });
}

module.exports.updateStatus = (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ success: false, data: 'Invalid Request' });
    }
    
    notesdb.updateStatus(req.body)
        .then((data) => {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, data: err });
        });
}
