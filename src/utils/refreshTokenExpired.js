import jwt_decode from 'jwt-decode';

const refreshTokenExpired = () => {
  const refreshToken = window.localStorage.getItem('refresh_token');

  if (!refreshToken) {
    return true;
  }

  const decodeToken = jwt_decode(refreshToken);

  const currentTime = new Date().getTime() / 1000;

  if (decodeToken.exp < currentTime) {
    return true;
  }

  return false;
};

export default refreshTokenExpired;
