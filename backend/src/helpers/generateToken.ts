export const generateToken = (length: number) => {
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let output = '';
    for (let i = 0; i < length; i++) {
        output = output + possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    }
    return output;
}

export default generateToken;