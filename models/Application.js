const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied"
  },
  appliedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Application", applicationSchema);
