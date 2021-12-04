export default function listGifts(letter) {
 const group = letter.split(' ').filter(item => item && item[0] !== '_');
 return group.reduce((acc, item) => {
    if (acc[item]) {
        acc[item] += 1;
    } else {
        acc[item] = 1;
    }
    return acc;
 },{})
}
