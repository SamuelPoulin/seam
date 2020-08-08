import * as jwt from 'jsonwebtoken';
import { injectable } from 'inversify';

@injectable()
export class TokenService {

  async verifyToken(token: string): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      if (process.env.JWT_PUBLIC_KEY) {
        jwt.verify(
          token,
          process.env.JWT_PUBLIC_KEY,
          { algorithms: ['RS256'] },
          (err, decoded) => {
            if (err) {
              reject(err);
            } else {
              resolve(decoded);
            }
          });
      } else {
        reject();
      }
    });
  }

  async signToken(userid: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (process.env.JWT_PRIVATE_KEY) {
        jwt.sign(
          { userid: userid },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: '24h', algorithm: 'RS256' },
          (err, token) => {
            if (err) {
              reject(err);
            } else {
              resolve(token);
            }
          });
      }
    });
  }
}
