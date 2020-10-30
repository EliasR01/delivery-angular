import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  let expirationDate = new Date();
  if (token.length > 0) {
    expirationDate = new Date(Date.now() + 1800000);
  }
  res.cookie('tid', token, {
    domain: 'localhost',
    path: '/',
    expires: expirationDate,
  });
};
