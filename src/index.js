module.exports = function check(str, bracketsConfig) {
  let sameBracket = [];
  const brackets = bracketsConfig.reduce((obj, item) => {
    obj[item[1]] = item[0];
    if (item[0] === item[1]) sameBracket.push(item[0]);
    return obj;
  }, {});

  let result = [];

  for (let index = 0; index < str.length; index++) {
    let char = str[index];
    if (char in brackets && result.length > 0 && brackets[char] === result[result.length - 1]) {
      if (brackets[char] !== result.pop()) {
        return false;
      }
    } else {
      result.push(char);
    }
  }

  return result.length === 0;
}
