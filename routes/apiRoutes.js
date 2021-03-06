const noteData = require('../data/noteData');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/tables', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    });

    app.post('api/clear', (req, res) => {
        noteData.length = 0;
        res.json({ok:true});
    });
};