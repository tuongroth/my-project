module.exports = (err, req, res, next) => {
  console.error(err.message);
  if (err.name === 'ValidationError') {
      return res.status(400).json({ msg: err.message });
  }
  res.status(500).send('Server Error');
};
