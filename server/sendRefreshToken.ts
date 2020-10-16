import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('tid', token, {
    domain: 'localhost',
    path: '/',
  });
};
