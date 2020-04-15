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
    long: {
      type: String,
      default: null,
    },
    short: {
      type: String,
      default: null,
    },
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
          currency: { type: String, default: null },
          amount: { type: Number, default: null },
        },
        date: {
          day: { type: Number, default: null },
          month: { type: Number, default: null },
          year: { type: Number, default: null },
        },
      },
    ],
    latestRoundInfo: {
      isKeyFundingRound: { type: Boolean, default: null },
      amount: {
        currency: { type: String, default: null },
        amount: { type: Number, default: null },
      },
    },
    investorInfo: { type: Object, default: null },
  },

  profileLinks: {
    linkedIn: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
  },
  sectors: [
    {
      type: String,
      default: null,
    },
  ],
  tags: [
    {
      type: String,
      default: null,
    },
  ],
  __v: {
    type: Number,
    select: false,
  },
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data;
