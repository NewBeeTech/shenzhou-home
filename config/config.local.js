const host = '0.0.0.0';
const APIURL = 'http://118.178.109.73'; // 开发环境
module.exports = {
  host: host,
  port: '5000',
  proxyURL: APIURL,
  app: {
    ENV: JSON.stringify('local'),
    APIURL: JSON.stringify(''),
  },
};
