function zipStrings(strA, strB) {
  let strAString = strA.split("");
  let strBString = strB.split("");
  let result = "";
  let stringLength = undefined;

  if (strAString < strBString) {
    stringLength = strBString.length;
  } else {
    stringLength = strAString.length;
  }

  for (let i = 0; i < stringLength; i++) {
    if (strAString[i] === "" || strAString[i] === undefined) {
      result += strBString[i];
    } else if (strBString[i] === "" || strBString[i] === undefined) {
      result += strAString[i];
    } else {
      result += strAString[i] + strBString[i];
    }
  }

  return result;
}
