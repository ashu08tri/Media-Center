const Subscription = require("../models/Subscription");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.subscribe = async (req, res) => {
  const { email, type } = req.body;

  if (!email || !type) {
    return res.status(400).json({ message: "Email and type are required" });
  }

  const typePriceMap = {
    digital: 299,
    print: 499,
    both: 699,
  };

  const price = typePriceMap[type];
  if (!price) {
    return res.status(400).json({ message: "Invalid subscription type" });
  }

  try {
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSub = new Subscription({ email, type, price });
    await newSub.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Payment Instructions - Kisan Satta",
      html: `
        <h2>We hope you're well. This is a reminder regarding the payment for the Kisan Satta subscription that you have requested!</h2>
        <p>You selected the <strong>${type}</strong> plan.</p>
        <p>Please make a payment of <strong>₹${price}</strong> to the account below:</p>
        <ul>
        <li>Bank Details:</li>
        <li><strong>Name - ALOK ANANDKUMAR TRIPATHI</strong></li>
          <li><strong>Account No:- 623801535116</strong></li>
          <li><strong>IFSC code - ICIC0006238</strong></li>
        </ul>
        <p>Once paid, please reply with a screenshot for verification.</p>
        <p>Once the payment is verified, we will send a confirmation email and your products.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Subscription successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.allSubs = async (req, res) => {
  const { status, date, type } = req.query;
  const query = {};

  if (status) query.status = status;
  if (type) query.type = type;
  if (date) {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);
    query.subscribedAt = { $gte: start, $lt: end };
  }

  try {
    const users = await Subscription.find(query).sort({ subscribedAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.editSubs = async (req, res) => {
  try {
    await Subscription.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.json({ message: "Status updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};

exports.deleteSubs = async (req, res) => {
  try {
    await Subscription.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

