const buildVersion = '1.0.0';
const port = 3000;

module.exports = {
  buildVersion,
  port: process.env.PORT || port,
  mediaPath: 'http://localhost:3000/media',
};
