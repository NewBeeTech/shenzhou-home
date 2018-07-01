const host = '0.0.0.0';
const APIURL = 'http://118.190.158.183:8080/api/'; // 开发环境
module.exports = {
  host: host,
  port: '5000',
  proxyURL: APIURL,
  app: {
    ENV: JSON.stringify('local'),
    APIURL: JSON.stringify(''),
  },
};
