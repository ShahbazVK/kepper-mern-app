const MemosSchema = require('../models/memos');

exports.addMemo = (req, res) => {
    const { title, desc } = req.body;
    console.log(title)
    console.log(desc);
    MemosSchema.create({ title, desc }, (err, post) => {
        if (err) console.log(err);
        else res.json(post)
    })
}

exports.getMemo = (req, res) => {
    MemosSchema.find({}, (err, post) => {
        if (err) console.log(err);
        else res.json(post)
    })
}

exports.deleteMemo = (req, res) => {
    const { _id } = req.params
    MemosSchema.findOneAndRemove({ _id }, (err, post) => {
        if (err) console.log(err);
        else res.json(post)
    })
}