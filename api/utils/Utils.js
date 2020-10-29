const Utils = {
  formatResponse: (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.json(data);
  },
};

module.exports = Utils;
