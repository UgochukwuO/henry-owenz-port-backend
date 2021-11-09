const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
    Date_Created: String,
    Author: String,
    Title: String,
    Content: String, 
});

module.exports = model("Blog", blogSchema);
