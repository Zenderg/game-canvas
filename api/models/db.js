const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/user-management-example';
mongoose.connect(dbUrl, () => {
    console.log(`MongoDB connected sucessfully`);
});

module.exports = mongoose;