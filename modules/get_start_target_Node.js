export const getStartTargetNode = () => {
  const SN = document.getElementsByClassName("startNode")[0];
  const TN = document.getElementsByClassName("targetNode")[0];

  const allStartNClass = SN.className;
  const allTargetNClass = TN.className;

  const firstIndexS = allStartNClass.indexOf("_");
  const secondIndexS = allStartNClass.indexOf("_", firstIndexS + 1);
  const thirdIndexS = allStartNClass.indexOf("_", secondIndexS + 1);
  const subStringSNrowS = parseInt(allStartNClass.substring(firstIndexS + 1, secondIndexS));
  const substringSNcolS = parseInt(allStartNClass.substring(secondIndexS + 1, thirdIndexS));

  const firstIndexT = allTargetNClass.indexOf("_");
  const secondIndexT = allTargetNClass.indexOf("_", firstIndexT + 1);
  const thirdIndexT = allTargetNClass.indexOf("_", secondIndexT + 1);
  const subStringSNrowT = parseInt(allTargetNClass.substring(firstIndexT + 1, secondIndexT));
  const substringSNcolT = parseInt(allTargetNClass.substring(secondIndexT + 1, thirdIndexT));

  return {
    startN: [subStringSNrowS, substringSNcolS],
    targetN: [subStringSNrowT, substringSNcolT],
  };
};

