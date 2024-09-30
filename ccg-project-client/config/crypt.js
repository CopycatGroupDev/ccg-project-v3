import CryptoJS from 'crypto-js';

export default (data) => {
    const encoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
    const encrypted = CryptoJS.MD5(encoded).toString();
    return encrypted;
}