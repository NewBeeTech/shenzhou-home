import Tinker from '../../lib/tinker/src/index';

/**
 * uuid状态查询，用于二维码登陆   此接口是苏遵守负责
 * @param  {[string]} uuid [description]
 * @return {[<Tinker>]}      [description]
 */
export function checkStat(uuid) {
  return new Tinker(
    `${APIURL}/topnews/qr/checkStat`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      credentials: 'include'
    },
    {
      uuid,
    }
  );
}


export function getUserInfo() {
  return new Tinker(
    `${APIURL}/topnews/user/ifLoginCORS`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      credentials: 'include'
    },
    {},
  );
}

export function invalidateSession() {
  return new Tinker(
    `${APIURL}/topnews/qr/invalidateSession`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      credentials: 'include'
    },
    {},
  );
}
