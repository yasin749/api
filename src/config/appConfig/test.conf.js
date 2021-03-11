const buildVersion = process.env.APP_BUILD_VERSION || '1.0.0';
const port = 80;

module.exports = {
  buildVersion,
  port: process.env.PORT || port,
  mediaPath: 'http://domain.com/media',
};
