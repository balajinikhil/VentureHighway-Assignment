const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    default: null,
  },
  domain: {
    type: String,
    default: null,
  },
  description: {
    long: String,
    short: String,
  },
  foundedYear: {
    type: Number,
    default: null,
  },
  fundingInfo: {
    numberOfFundingRounds: {
      type: Number,
      default: null,
    },
    fundingRoundList: [
      {
        amount: {
          currency: String,
          amount: Number,
        },
        date: {
          day: Number,
          month: Number,
          year: Number,
        },
      },
    ],
    latestRoundInfo: {
      isKeyFundingRound: Boolean,
      amount: {
        currency: String,
        amount: Number,
      },
    },
    investorInfo: Object,
  },

  profileLinks: {
    linkedIn: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  sectors: [
    {
      type: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
