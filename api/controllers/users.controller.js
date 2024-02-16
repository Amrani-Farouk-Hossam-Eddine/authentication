const db = require("../connect");

const getUser = (req, res) => {
  const q = "SELECT * FROM users WHERE users.id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return resizeBy.status(500).json(err);
    const { password, ...info } = data[0];
    return res.status(200).json(info);
  });
};

module.exports = { getUser };
