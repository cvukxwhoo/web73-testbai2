import jwt from 'jsonwebtoken';

const createAccessToken = (document) => {
  const payload = {
    id: document._id,
    type: 'ACCESSTOKEN',
  };
  const newToken = jwt.sign(payload, 'WEB73', {
    expiresIn: 1000 * 6 * 10,
  });
  return newToken;
};

const verifyToken = (token) => {
  const checkToken = jwt.verify(token, 'WEB73');
  console.log(checkToken);
  return checkToken;
};
export { createAccessToken, verifyToken };
