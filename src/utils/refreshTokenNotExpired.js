import jwt_decode from 'jwt-decode';

const refreshTokenNotExpired = () => {
  const refreshToken = localStorage.getItem('refresh_token');

  if (!refreshToken) {
    return false;
  }

  const decodeToken = jwt_decode(refreshToken);

  const currentTime = new Date().getTime() / 1000;

  if (decodeToken.exp < currentTime) {
    return false;
  }

  return true;
};

export default refreshTokenNotExpired;
