const axios = require('axios').default;

module.exports = class ApiController {
  static async getCrypto(req, res) {
    const currency = req.body.currency;
    const crypto = req.body.crypto;
    try {
      const coinstatsURL = `https://api.coinstats.app/public/v1/coins/${crypto}?currency=${currency}`;
      const { data } = await axios.get(coinstatsURL);
      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
