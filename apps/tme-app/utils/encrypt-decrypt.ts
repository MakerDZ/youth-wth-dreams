import * as crypto from 'crypto';

const secretKey = process.env.SECRET_KEY!;
const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync(secretKey, 'salt', 32);

export function encrypt(message: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

export function decrypt(encryptedMessage: string): string | null {
    const [ivHex, encryptedData] = encryptedMessage.split(':');
    if (ivHex !== undefined && encryptedData !== undefined) {
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    return null;
}
