const transpose = require('./transpose');


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    let newArr = transpose(letters);
    newArr = newArr.map(ls => ls.join(''));
    console.log(newArr)
    for (let l of newArr) {
        console.log(newArr);
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch