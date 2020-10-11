import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('tid', token, {
    httpOnly: true,
    path: '/refresh_token_id',
  });
};
