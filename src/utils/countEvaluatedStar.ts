const handleEvaluatedStar = (evaluate: number[]): number => {
  if (evaluate.length) {
    let sumEvaluated: number = evaluate.reduce((value, num) => num + value);
    return sumEvaluated / evaluate.length;
  }
  return 5;
};

export default handleEvaluatedStar