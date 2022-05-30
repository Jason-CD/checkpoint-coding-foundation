function filterApiData(apiData, mandatoryKeys) {
  let resultArr = [];

  for (let i = 0; i < mandatoryKeys.length; i++) {
    manKey = mandatoryKeys[i];
    // console.log(manKey);
    for (let j = 0; j < apiData.length; j++) {
      apiKey = apiData[j];
      //console.log(apiKey);
      if (apiData.has(manKey)) {
        resultArr.push(apiData);
      }
    }
    console.log(b);
  }
}

// console.log(resultArr);
