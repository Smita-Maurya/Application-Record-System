const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  description: String,
  resumeLink: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      //"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcompany-sign&psig=AOvVaw1NqwR8-8nh68MJDYTA6UG2&ust=1706004334440000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDj1sXf8IMDFQAAAAAdAAAAABAD",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        : v,
  },
  portfolioLink: {
    type: String,
    // default:
    //   "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      //"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcompany-sign&psig=AOvVaw1NqwR8-8nh68MJDYTA6UG2&ust=1706004334440000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDj1sXf8IMDFQAAAAAdAAAAABAD",
    // set: (v) =>
    //   v === ""
    //     ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //     : v,
  },
  // coverletter:String,
  // fullname:String,
  // address:String,
  // city: String,
  // country: String,
  // phonenumber: Number,
  // email:String,
  // collegename:String,
  // cgpa:Number,
  // skills:String,
  status:String,
  applicationdate:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;