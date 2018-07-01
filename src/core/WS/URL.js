/* @flow */
let rootURL: string = '/api/';
if(process.env.NODE_ENV === 'production') {
  rootURL = 'http://118.190.158.183:8080/api/'
}

// 获取OSS签名
export const leaveMsgPath: string = `${rootURL}user/leaveMsg`;
