import jwt from 'jsonwebtoken';

const TOKEN_SECRET = 'senhasupersegura';

const generateToken = (userName: string): string => {
  const token = jwt.sign(
    { data: userName },
    TOKEN_SECRET,
    { expiresIn: '7d', algorithm: 'HS256' },
  );

  return token;
};

export default generateToken;
