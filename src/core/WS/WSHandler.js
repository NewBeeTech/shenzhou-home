/* @flow weak */

// import fetchp from 'fetch-jsonp';
// import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
require('isomorphic-fetch');
require('babel-polyfill');
// import 'whatwg-fetch';

/**
 * 将Object转为url params string
 * @param params
 * @returns {string}
 * @private
 */
const _param = (params: {}): string => {
  return Object.keys(params).map((key) => {
    if(params[key] === 0 || params[key]) {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }
  }).join('&');
};

export const GET = async (path: string, params = {}) => {
  const paramsWithToken = Object.assign(
    {},
    params,
  );
  const RequestURL = _param(paramsWithToken) ? `${path}?${_param(paramsWithToken)}` : path;
  try {
    const response = await fetch(RequestURL, {
      method: 'GET',
      headers: {
      },
      mode: 'cors',
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return {
      message: err,
    };
  }
};
