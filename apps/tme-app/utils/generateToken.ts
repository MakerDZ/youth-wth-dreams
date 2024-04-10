import * as crypto from 'crypto';

export function generateToken(): string {
    const bytes = crypto.randomBytes(32);
    const connectId = bytes.toString('hex');
    return connectId;
}
