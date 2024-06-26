const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const MemberSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthDate: {type: Date, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
}, {collection: 'datavid-collection'});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;