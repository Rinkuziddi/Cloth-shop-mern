const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pageUrl: {
        type: String,
        required: true,
    },
});

const userModel = new mongoose.model('superadminSideBar', projectSchema,"superadmin-sidebar");
module.exports = userModel;