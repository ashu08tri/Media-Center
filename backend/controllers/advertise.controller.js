const Advertise = require("../models/Advertise");

exports.addAdvertisement = async (req, res) => {
  const { name, email, phone, details } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const entry = new Advertise({ name, email, phone, details });
    await entry.save();
    res.json({ message: "Advertisement request received." });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

exports.getAdvertisements = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  try {
    const total = await Advertise.countDocuments();
    const ads = await Advertise.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({ ads, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: "Error fetching advertisements." });
  }
};

exports.updateAdStatus = async (req, res) => {
  try {
    const ad = await Advertise.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "Advertisement not found." });

    ad.status = "approved";
    await ad.save();
    res.json({ message: "Advertisement approved." });
  } catch (err) {
    res.status(500).json({ message: "Error updating status." });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    await Advertise.findByIdAndDelete(req.params.id);
    res.json({ message: "Advertisement deleted." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting advertisement." });
  }
};
