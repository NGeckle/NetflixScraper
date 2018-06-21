var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ShowSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  distribution: {
    type: String,
    required: true
  }
});

var Show = mongoose.model("Show", ShowSchema);

module.exports = Show;