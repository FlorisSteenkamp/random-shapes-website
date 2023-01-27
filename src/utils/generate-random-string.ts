import { generateRandomIntUpTo } from './generate-random-int.js';


function generateRandomStrOfLength(n: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array(n).fill(undefined).map(() => chars.charAt(generateRandomIntUpTo(chars.length))).join('');
}


export { generateRandomStrOfLength }


// TEST
// generateRandomStrOfLength(2);

